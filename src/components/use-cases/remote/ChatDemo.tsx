import { ChevronRight } from "lucide-react";
import OpenAIMark from "@/components/mcp/clients/chatgpt/OpenAIMark";

/**
 * Static ChatGPT style card for the use-case pages: one request and what
 * Desktop Commander did on the computer. Replaces the old app screen videos.
 */
export interface ChatDemoProps {
  user: string;
  workedFor: string;
  reply: string;
  steps: string[];
  className?: string;
}

const ChatDemo = ({ user, workedFor, reply, steps, className = "" }: ChatDemoProps) => (
  <div className={`rounded-2xl overflow-hidden shadow-elegant bg-white text-[#0d0d0d] text-left ${className}`}>
    <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10">
      <OpenAIMark className="w-5 h-5" />
      <span className="text-sm font-semibold">ChatGPT</span>
      <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-[#10a37f]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10a37f]" />
        connected to your machine
      </span>
    </div>
    <div className="px-4 py-4 space-y-3">
      <div className="ml-auto max-w-[92%] w-fit rounded-3xl bg-[#f4f4f4] px-4 py-2.5 text-sm leading-relaxed">
        {user}
      </div>
      <div className="flex items-center gap-1 text-sm text-[#8f8f8f]">
        {workedFor}
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
      <p className="text-sm leading-relaxed">{reply}</p>
      <ul className="space-y-1.5 text-sm">
        {steps.map((step) => (
          <li key={step} className="flex gap-2 leading-relaxed">
            <span className="select-none">•</span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ChatDemo;
