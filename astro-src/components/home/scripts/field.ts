/**
 * Hero background: a dot matrix field drawn on the GPU.
 *
 * A grid of dots in the brand blue. Patches of the grid light up as a slow
 * noise field drifts across it, single "packets" run along rows and columns,
 * and the dots under the pointer swell. One full-screen triangle and one
 * fragment shader, no libraries.
 *
 * Cost control: capped pixel ratio, drops resolution if frames get slow,
 * stops when the hero is off screen or the tab is hidden, and draws a single
 * still frame for prefers-reduced-motion. Without WebGL the canvas stays
 * transparent and the CSS glow behind it is what shows.
 */

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseOn;
uniform float uScale;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(17.3, 9.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = frag / uRes;
  float t = uTime;

  float cell = 30.0 * uScale;
  vec2 g = frag / cell;
  vec2 id = floor(g);
  vec2 f = fract(g) - 0.5;

  // slow patches of activity
  float n = fbm(id * 0.05 + vec2(t * 0.03, -t * 0.018));
  float act = smoothstep(0.44, 0.76, n);

  // diagonal sweep that passes through the active patches
  float sweep = pow(0.5 + 0.5 * sin(id.x * 0.15 + id.y * 0.1 - t * 0.85), 5.0);

  // pointer
  float md = distance(frag, uMouse) / (250.0 * uScale);
  float halo = exp(-md * md * 2.4) * uMouseOn;

  // packets running along some rows and columns
  float pk = 0.0;
  float rs = hash(vec2(id.y, 7.0));
  if (rs > 0.84) {
    float ph = fract(id.x * 0.019 - t * (0.07 + rs * 0.1) + rs * 13.0);
    pk = smoothstep(0.9, 1.0, ph);
  }
  float cs = hash(vec2(id.x, 3.0));
  if (cs > 0.92) {
    float ph = fract(id.y * 0.027 + t * (0.06 + cs * 0.08) + cs * 11.0);
    pk = max(pk, smoothstep(0.9, 1.0, ph));
  }

  float energy = clamp(act * (0.4 + 0.5 * sweep) + halo + pk * 0.95, 0.0, 1.0);

  // the dot
  float r = mix(0.075, 0.16, energy);
  float d = length(f);
  float dotMask = smoothstep(r, r - 0.04, d);
  float twinkle = 0.78 + 0.22 * sin(t * 1.6 + hash(id) * 6.2831);
  float lum = dotMask * (0.3 + energy * 0.8) * twinkle;

  vec3 low = vec3(0.36, 0.5, 0.9);
  vec3 high = vec3(0.74, 0.86, 1.0);
  vec3 col = mix(low, high, energy) * lum;

  // glow around lit dots
  float bloom = exp(-d * d * 9.0) * energy * energy * 0.24;
  col += vec3(0.25, 0.45, 1.0) * bloom;

  // keep the middle column calm so the headline stays easy to read,
  // and let the grid dissolve toward the left and right edges
  float calm = 1.0 - 0.5 * exp(-pow((uv.x - 0.5) / 0.26, 2.0)) * smoothstep(0.4, 0.58, uv.y) * (1.0 - smoothstep(0.94, 1.0, uv.y));
  float edge = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);
  col *= calm * edge;

  // drifting haze, strongest behind the headline
  float haze = fbm(uv * vec2(2.4, 1.7) + vec2(t * 0.02, t * 0.012));
  vec2 c = (uv - vec2(0.5, 0.86)) * vec2(1.0, 2.1);
  float top = exp(-dot(c, c) * 3.0);
  col += vec3(0.1, 0.22, 0.62) * top * (0.25 + 0.75 * haze) * 0.5;

  // dissolve into the page toward the bottom of the canvas
  col *= smoothstep(0.0, 0.38, uv.y);

  float a = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
  gl_FragColor = vec4(col, a);
}
`;

export function initField(reduceMotion: boolean) {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-field]');
  if (!canvas) return;

  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: true,
    powerPreference: 'low-power',
  });
  if (!gl) return;

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;

  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  // one triangle that covers the viewport
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, 'uRes');
  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uMouse = gl.getUniformLocation(prog, 'uMouse');
  const uMouseOn = gl.getUniformLocation(prog, 'uMouseOn');
  const uScale = gl.getUniformLocation(prog, 'uScale');

  let quality = 1; // lowered when frames are slow
  let scale = 1;
  let visible = true;
  let raf = 0;
  const start = performance.now();
  let slow = 0;
  let prev = 0;
  let stopped = false; // set when the device is too slow to animate the field

  // pointer, eased so the halo trails slightly
  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, on: 0, target: 0 };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    scale = Math.min(window.devicePixelRatio || 1, 1.5) * quality;
    const w = Math.max(1, Math.round(rect.width * scale));
    const h = Math.max(1, Math.round(rect.height * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  };

  const draw = (now: number) => {
    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;
    mouse.on += (mouse.target - mouse.on) * 0.08;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, (now - start) / 1000);
    gl.uniform2f(uMouse, mouse.x * scale, canvas.height - mouse.y * scale);
    gl.uniform1f(uMouseOn, mouse.on);
    gl.uniform1f(uScale, scale);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const loop = (now: number) => {
    raf = 0;
    if (!visible || document.hidden) return;
    // If the device cannot keep up, trade resolution for smoothness (twice at
    // most). If it is still struggling after that, stop animating and leave
    // the last frame as a still background, so the page itself stays smooth.
    if (prev) {
      const dt = now - prev;
      slow = dt > 34 ? slow + 1 : Math.max(0, slow - 1);
      if (slow > 24) {
        slow = 0;
        if (quality > 0.5) {
          quality = quality > 0.75 ? 0.75 : 0.5;
          resize();
        } else {
          stopped = true;
          draw(now);
          return;
        }
      }
    }
    prev = now;
    draw(now);
    raf = requestAnimationFrame(loop);
  };

  const kick = () => {
    prev = 0;
    if (!raf && !stopped && visible && !document.hidden && !reduceMotion) {
      raf = requestAnimationFrame(loop);
    }
  };

  resize();
  new ResizeObserver(() => {
    resize();
    if (reduceMotion) draw(start + 4000);
    else if (stopped) draw(performance.now());
  }).observe(canvas);

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    cancelAnimationFrame(raf);
    raf = 0;
    canvas.classList.remove('is-on');
  });

  if (reduceMotion) {
    draw(start + 4000);
    canvas.classList.add('is-on');
    return;
  }

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'touch') return;
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      if (mouse.target === 0) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
      mouse.target = 1;
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', () => {
    mouse.target = 0;
  });

  new IntersectionObserver((entries) => {
    visible = entries[entries.length - 1].isIntersecting;
    kick();
  }).observe(canvas);
  document.addEventListener('visibilitychange', kick);

  canvas.classList.add('is-on');
  kick();
}
