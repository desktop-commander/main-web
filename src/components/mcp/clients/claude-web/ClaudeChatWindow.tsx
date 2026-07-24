import { ChevronDown as TitleChevron } from "lucide-react";

/**
 * Shared shell for realistic Claude chat mockups (light cream UI like claude.ai).
 * Children render inside the conversation area with their own animations.
 */
interface Props {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  minHeightClass?: string;
}

const ClaudeChatWindow = ({ title, children, footer, minHeightClass = "min-h-[250px]" }: Props) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-[#FCFBF8] text-[#1a1915]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.07]">
        <span className="inline-flex items-center gap-1 text-sm font-semibold">
          {title}
          <TitleChevron className="w-3.5 h-3.5 text-[#8a877d]" />
        </span>
        <span className="ml-auto text-xs font-medium text-[#1a1915] border border-black/10 rounded-lg px-3 py-1 bg-white">
          Share
        </span>
      </div>

      {/* Conversation */}
      <div className={`px-4 py-4 space-y-3 text-left ${minHeightClass}`}>{children}</div>

      {footer}
    </div>
  );
};

export default ClaudeChatWindow;
