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
 *   codebase        ads: "Work with your codebase" / "Stop pasting code"
 */

export type CampaignKey = "organize-files" | "codebase";

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

const codebase: GptCampaign = {
  key: "codebase",
  seo: {
    title: "Work with Your Codebase from ChatGPT | Desktop Commander",
    description:
      "Stop pasting code. ChatGPT reads and edits the files in your local project and applies changes directly, with the Desktop Commander plugin.",
  },
  hero: {
    lines: [{ text: "Work with" }, { text: "your codebase", accent: true }, { text: "from ChatGPT" }],
    sub: "Stop pasting code back and forth. ChatGPT reads and edits the files in your local project and applies changes directly.",
    note: SETUP_NOTE,
    typedPrompts: [
      "Add a dark mode switch to my website",
      "Explain how this project is structured",
      "Find out why the Save button does nothing",
    ],
    chat: {
      user: "Add a dark mode switch to my website",
      workedFor: "Worked for 1m 5s",
      reply: "Dark mode is added to your website.",
      steps: [
        "Read the header and styles in ~/code/my-site.",
        "Added a switch to the header and dark colors to styles.css.",
        "The site remembers the choice after a reload.",
      ],
    },
  },
  showcase: {
    heading: "Ask ChatGPT about your project",
    sub: "A few prompts to start with. Pick a task and see what one message can do.",
    categories: [
      {
        key: "understand",
        label: "Understand the project",
        icon: Search,
        prompts: [
          "Explain how this project is structured and where it starts",
          "Where is user login handled? Show me the files",
          "Trace what happens when the checkout button is clicked",
        ],
      },
      {
        key: "change",
        label: "Make changes",
        icon: Pencil,
        prompts: [
          "Add input validation to the signup form",
          "Rename the User model to Account across the codebase",
          "Move the API calls in this component into a service file",
        ],
      },
      {
        key: "test",
        label: "Run and fix",
        icon: FlaskConical,
        prompts: [
          "Run the tests and fix the ones that fail",
          "Start the dev server and fix the error in the console",
          "Find out why the build fails and fix it",
        ],
      },
      {
        key: "docs",
        label: "Document",
        icon: FileText,
        prompts: [
          "Write a README for this project from the source",
          "Document the API endpoints in this repo",
          "Add comments to the functions in utils/date.ts",
        ],
      },
    ],
  },
  capabilities: {
    heading: "What happens on your computer",
    sub: "ChatGPT works in your project folder through Desktop Commander. No copying code into the chat.",
    blocks: [
      {
        kind: "edit",
        title: "Reads and edits your project files",
        body: "ChatGPT opens the files it needs, makes the change, and saves it in place. You review the result in your own editor or with git diff.",
        bullets: [
          "Searches across the whole project",
          "Edits several files in one task",
          "Changes land in your files, not in the chat",
        ],
      },
      {
        kind: "terminal",
        title: "Runs your tests and builds",
        body: "It runs commands in your real terminal, reads the output, and keeps going until the task is done.",
        bullets: [
          "Installs dependencies and starts dev servers",
          "Runs tests and reads the failures",
          "Uses the tools you already have installed",
        ],
      },
    ],
  },
  firstPrompt: {
    title: "Then point it at your project",
    prompt: "Open my project in ~/code/my-app and explain how it is structured. List the files you looked at.",
    note: "Paste it into ChatGPT once your computer is connected, with the path to your own project.",
  },
  final: {
    heading: "Stop pasting code into ChatGPT",
    sub: "Add Desktop Commander, connect your computer, and let ChatGPT work directly in your project files.",
  },
};

export const CAMPAIGNS: Record<CampaignKey, GptCampaign> = {
  "organize-files": organizeFiles,
  codebase,
};

/** The campaign's config, or null on the base /mcp/chatgpt/ page. */
export const getCampaign = (key?: CampaignKey) => (key ? CAMPAIGNS[key] : null);
