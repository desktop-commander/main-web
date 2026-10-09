import { useEffect, useRef, useState } from "react";
import OpenAIMark from "@/components/mcp/clients/chatgpt/OpenAIMark";
import { RANKINGS, type Ranking } from "./links";

/**
 * Hero eyebrow pill that cycles through the directory rankings.
 *
 * Every ranking sits in the same grid cell; the active one slides in from
 * below while the previous one slides out the top. The pill's width follows
 * the active ranking. Rotation pauses on hover and keyboard focus, and is off
 * entirely for prefers-reduced-motion (the first ranking stays).
 */

const INTERVAL_MS = 3500;

const MarkTile = ({ platform }: { platform: Ranking["platform"] }) => (
  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white">
    {platform === "chatgpt" ? (
      <OpenAIMark className="h-3.5 w-3.5 text-black" />
    ) : (
      <img src="/claude-logo.png" alt="" className="h-3.5 w-3.5 object-contain" />
    )}
  </span>
);

const describe = (r: Ranking) => `#${r.rank} ${r.label}, ${r.date}`;

interface Props {
  className?: string;
  onSelect?: (ranking: Ranking) => void;
  /** Show only one platform's rankings (e.g. ChatGPT ads pages). Default: all. */
  platform?: Ranking["platform"];
}

const RankingPill = ({ className = "", onSelect, platform }: Props) => {
  const items = platform ? RANKINGS.filter((r) => r.platform === platform) : RANKINGS;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [widths, setWidths] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const count = items.length;

  // Measure each ranking's natural width so the pill can animate between them.
  // Items are w-max, so the measurement never depends on the pill's current
  // width. Re-measure once web fonts land and whenever an item's size changes.
  useEffect(() => {
    const measure = () => setWidths(itemRefs.current.map((el) => el?.offsetWidth ?? 0));
    measure();
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    itemRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const current = items[active];
  const position = (i: number) =>
    i === active
      ? "translate-y-0 opacity-100"
      : i === (active - 1 + count) % count
        ? "-translate-y-full opacity-0"
        : "translate-y-full opacity-0";

  return (
    <div className={`mb-7 flex justify-center lg:justify-start ${className}`}>
      <a
        href={current.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={describe(current)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onClick={() => onSelect?.(current)}
        className="inline-flex items-center rounded-full border border-dc-border bg-dc-card/70 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-colors hover:border-primary/50"
      >
        <span
          aria-hidden="true"
          className="grid overflow-hidden transition-[width] duration-500 ease-out"
          style={widths[active] ? { width: widths[active] } : undefined}
        >
          {items.map((r, i) => (
            <span
              key={describe(r)}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`col-start-1 row-start-1 flex w-max items-center gap-2.5 whitespace-nowrap text-[13px] transition-all duration-500 ease-out sm:text-sm ${position(i)}`}
            >
              <MarkTile platform={r.platform} />
              <span className="font-medium text-foreground">
                <span className="font-bold text-primary">#{r.rank}</span> {r.label}
              </span>
              <span className="h-3.5 w-px bg-dc-border" />
              <span className="text-muted-foreground">{r.date}</span>
            </span>
          ))}
        </span>
      </a>
    </div>
  );
};

export default RankingPill;
