import type { LucideIcon } from "lucide-react";
import {
  FolderOpen,
  PenLine,
  Layers,
  ListChecks,
  Search,
  Pencil,
  FlaskConical,
  FileText,
} from "lucide-react";

/**
 * Copy for the ChatGPT ads landing pages, one entry per campaign.
 *
 * The /mcp/chatgpt/ components read this when a page passes `campaign="<key>"`;
 * without it they render the base page unchanged. Headlines mirror the ad titles
 * so people land on the promise they clicked.
 *
 *   organize-files  ads: "Sort files on your Desktop" / "Organize files on your Desktop"
 *
 * The codebase campaign moved to the Oct 2026 Code/Machines pages: see ./ads/adPages.ts.
 */

export type CampaignKey = "organize-files";

export interface GptCampaign {
  key: CampaignKey;
  seo: { title: string; description: string };
  hero: {
    /** One entry per headline line; `accent` lines get the gradient. */
    lines: { text: string; accent?: boolean }[];
    sub: string;
    /** Small print under the CTA: what setup involves. */
    note: string;
    typedPrompts: string[];
    chat: { user: string; workedFor: string; reply: string; steps: string[] };
  };
  showcase: {
    heading: string;
    sub: string;
    categories: { key: string; label: string; icon: LucideIcon; prompts: string[] }[];
  };
  capabilities: {
    heading: string;
    sub: string;
    blocks: { kind: "files" | "edit" | "terminal"; title: string; body: string; bullets: string[] }[];
  };
  firstPrompt: { title: string; prompt: string; note: string };
  final: { heading: string; sub: string };
}

const SETUP_NOTE =
  "Needs the Desktop Commander plugin in ChatGPT and a one-time connection to your computer. Setup takes about 3 minutes.";

const organizeFiles: GptCampaign = {
  key: "organize-files",
  seo: {
    title: "Organize Files on Your Desktop from ChatGPT | Desktop Commander",
    description:
      "Turn desktop clutter into organized folders from ChatGPT. Rename, group, and move local files in one chat with the Desktop Commander plugin.",
  },
  hero: {
    lines: [{ text: "Organize files" }, { text: "on your Desktop", accent: true }, { text: "from ChatGPT" }],
    sub: "Turn desktop clutter into organized folders. Rename, group, and move local files in one chat.",
    note: SETUP_NOTE,
    typedPrompts: [
      "Organize the files on my Desktop",
      "Rename my screenshots by date",
      "Group my Desktop files by project",
    ],
    chat: {
      user: "Organize the files on my Desktop",
      workedFor: "Worked for 38s",
      reply: "Your Desktop is organized.",
      steps: [
        "Grouped 86 files into 6 folders by type.",
        "Renamed 24 screenshots by the date they were taken.",
        "Moved old installers into one Installers folder. Nothing was deleted.",
      ],
    },
  },
  showcase: {
    heading: "Ask ChatGPT to organize your Desktop",
    sub: "A few prompts to start with. Pick a task and see what one message can do.",
    categories: [
      {
        key: "sort",
        label: "Sort into folders",
        icon: FolderOpen,
        prompts: [
          "Sort the files on my Desktop into folders by type",
          "Move everything older than 3 months into an Archive folder",
          "Put all PDFs on my Desktop into a Documents folder",
        ],
      },
      {
        key: "rename",
        label: "Rename in bulk",
        icon: PenLine,
        prompts: [
          "Rename my screenshots to the date they were taken",
          "Give these invoice PDFs one naming pattern: date, vendor, amount",
          "Replace spaces with underscores in every file name in this folder",
        ],
      },
      {
        key: "group",
        label: "Group by project",
        icon: Layers,
        prompts: [
          "Group my Desktop files by client name",
          "Find every file for the Q3 report and put them in one folder",
          "Make a folder per project and move the matching files into it",
        ],
      },
      {
        key: "plan",
        label: "Plan before moving",
        icon: ListChecks,
        prompts: [
          "Suggest a folder structure for my Desktop before you move anything",
          "Show me which files you would rename, then wait for my OK",
          "List duplicate files on my Desktop so I can choose what to keep",
        ],
      },
    ],
  },
  capabilities: {
    heading: "What happens on your computer",
    sub: "ChatGPT plans the changes. Desktop Commander carries them out on your real files.",
    blocks: [
      {
        kind: "files",
        title: "Real files, real folders",
        body: "Desktop Commander lets ChatGPT see the files on your computer: names, dates, and contents. It moves and renames them where you ask. Nothing gets uploaded.",
        bullets: [
          "Sorts by type, date, or project",
          "Renames whole batches with one consistent pattern",
          "Works in the folders you allow",
        ],
      },
    ],
  },
  firstPrompt: {
    title: "Then ask for your first cleanup",
    prompt: "Look at the files on my Desktop and suggest a folder structure. Wait for my OK before moving anything.",
    note: "Paste it into ChatGPT once your computer is connected.",
  },
  final: {
    heading: "Clear your Desktop in one chat",
    sub: "Add Desktop Commander to ChatGPT, connect your computer, and ask it to organize your files.",
  },
};

export const CAMPAIGNS: Record<CampaignKey, GptCampaign> = {
  "organize-files": organizeFiles,
};

/** The campaign's config, or null on the base /mcp/chatgpt/ page. */
export const getCampaign = (key?: CampaignKey) => (key ? CAMPAIGNS[key] : null);
