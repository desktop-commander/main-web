import { Terminal, FileText, Pencil, MessageSquare } from "lucide-react";
import OpenAIMark from "../OpenAIMark";
import { getAdVariant, type AdPageKey, type DemoLine, type DemoStep, type Tone } from "./adPages";

/**
 * The advertised task from prompt to result. Until real recordings exist this is
 * an illustrative session, labelled as an example. A variant with `demo.video`
 * shows the recording instead.
 */

const TONE: Record<Tone, string> = {
  error: "text-[#ff6b6b]",
  ok: "text-[#4ade80]",
  add: "text-[#4ade80] bg-[#4ade80]/10",
  del: "text-[#ff6b6b] bg-[#ff6b6b]/10",
  muted: "text-white/45",
};

const Lines = ({ lines }: { lines: DemoLine[] }) => (
  <div className="mt-2 rounded-lg bg-black/40 border border-white/5 px-3 py-2.5 overflow-x-auto">
    {lines.map((l, i) => (
      <div key={i} className={`whitespace-pre font-mono text-[11px] sm:text-[12.5px] leading-relaxed -mx-3 px-3 w-max min-w-[calc(100%+1.5rem)] ${TONE[l.tone ?? "muted"]}`}>
        {l.text}
      </div>
    ))}
  </div>
);

const Icon = ({ kind }: { kind: DemoStep["kind"] }) => {
  const cls = "h-4 w-4";
  const I = kind === "run" ? Terminal : kind === "read" ? FileText : kind === "edit" ? Pencil : MessageSquare;
  return (
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60">
      <I className={cls} />
    </span>
  );
};

const Step = ({ step }: { step: DemoStep }) => {
  if (step.kind === "you") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-white">{step.text}</div>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <Icon kind={step.kind} />
      <div className="min-w-0 flex-1 pt-1">
        {step.kind === "run" && (
          <>
            <p className="text-xs uppercase tracking-wider text-white/40">Ran</p>
            <p className="font-mono text-[12.5px] sm:text-sm text-white mt-1 break-all">$ {step.command}</p>
            {step.lines && <Lines lines={step.lines} />}
          </>
        )}
        {step.kind === "read" && (
          <>
            <p className="text-xs uppercase tracking-wider text-white/40">Read</p>
            <p className="font-mono text-[12.5px] sm:text-sm text-white/80 mt-1 break-all">{step.file}</p>
          </>
        )}
        {step.kind === "edit" && (
          <>
            <p className="text-xs uppercase tracking-wider text-white/40">Edited</p>
            <p className="font-mono text-[12.5px] sm:text-sm text-white/80 mt-1 break-all">{step.file}</p>
            <Lines lines={step.lines} />
          </>
        )}
        {step.kind === "say" && <p className="text-sm text-white/90 leading-relaxed">{step.text}</p>}
      </div>
    </div>
  );
};

interface Props {
  page: AdPageKey;
  variant?: string;
}

const AdDemo = ({ page: pageKey, variant: variantKey = "" }: Props) => {
  const { page, variant } = getAdVariant(pageKey, variantKey);
  const { demo } = variant;
  const target = page.key === "code" ? "your project" : "your machine";

  return (
    <section id="demo" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How it works in a chat</h2>
          <p className="text-lg text-muted-foreground">
            You ask in ChatGPT. Desktop Commander runs the commands on the connected {page.key === "code" ? "computer" : "machine"} and ChatGPT reports back.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#121419] shadow-elegant overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
              <OpenAIMark className="h-4 w-4 text-black" />
            </span>
            <span className="text-sm font-semibold text-white">ChatGPT</span>
            <span className="text-sm text-white/40">with Desktop Commander</span>
            <span className="ml-auto rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-white/50">
              Example
            </span>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-5">
            <div className="flex justify-end">
              <div className="max-w-[90%] rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-white leading-relaxed">{demo.prompt}</div>
            </div>
            {demo.video ? (
              <video className="w-full rounded-xl border border-white/10" autoPlay loop muted playsInline controls>
                <source src={demo.video} type="video/mp4" />
              </video>
            ) : (
              demo.steps.map((s, i) => <Step key={i} step={s} />)
            )}
          </div>
        </div>

        {!demo.video && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Illustrative example. Commands and output depend on {target}.
          </p>
        )}
      </div>
    </section>
  );
};

export default AdDemo;
