/**
 * Copy for the three client landing pages built from
 * astro-src/components/landing/LandingPage.astro:
 *
 *   /mcp/chatgpt/         ChatGPT (Remote MCP plugin)
 *   /mcp/claude-web/      Claude in the browser (Remote MCP connector)
 *   /mcp/claude-desktop/  Claude Desktop (local MCP)
 *
 * Everything a visitor reads on those pages is here, one object per page, so
 * it can be edited without touching the layout. Page titles, descriptions,
 * the FAQ and the directory links stay in ./mcp-clients (shared with the
 * /mcp/ hub and the "Also works with" cards).
 *
 * The ChatGPT ad pages (/mcp/chatgpt/<campaign>/) do not use this file. They
 * keep their own React components in src/components/mcp/clients/chatgpt/.
 */
import { STATS } from '../../src/components/home-mcp/links';
import type { IconName } from '../components/home/icons';
import { getClient } from './mcp-clients';

export type LandingSlug = 'chatgpt' | 'claude-web' | 'claude-desktop';

/** A piece of the headline. Accented pieces take the brand blue. */
export interface TitlePart {
  text: string;
  accent?: boolean;
}

export interface Highlight {
  icon: IconName;
  title: string;
  description: string;
}

/** The typed prompt at the bottom of the hero window, and where "send" leads. */
export interface Composer {
  /** Typed one after another */
  prompts: string[];
  /**
   * Sending opens the typed prompt in the client: the prompt is appended to
   * this URL. Leave out when the button has one fixed destination (`href`).
   */
  sendBase?: string;
  href?: string;
  /** Name in the accessible label: Send "<prompt>" to <target> */
  sendTarget?: string;
  /** Accessible label when the destination is fixed */
  sendLabel?: string;
  /** Model label shown in the composer, as in the real app */
  model?: { name: string; effort: string };
}

export interface ChatGptWindow {
  kind: 'chatgpt';
  status: string;
  user: string;
  workedFor: string;
  reply: string;
  steps: string[];
  composer: Composer;
  caption: string;
}

export interface ClaudeWindow {
  kind: 'claude';
  title: string;
  user: string;
  chip: string;
  reply: string;
  steps: string[];
  composer: Composer;
  caption: string;
}

export interface ClaudeDesktopWindow {
  kind: 'claude-desktop';
  badge: string;
  greeting: string;
  modes: [string, string];
  context: [string, string];
  recentLabel: string;
  recent: { name: string; when: string }[];
  composer: Composer;
  caption: string;
}

export type FilesVisual =
  | { kind: 'video'; src: string; poster: string; windowTitle: string; title: string }
  | {
      kind: 'claude-chat';
      title: string;
      user: string;
      chip: string;
      found: string;
      files: string[];
      done: string;
    };

export type PhoneVisual =
  | { kind: 'video'; src: string; poster: string; title: string }
  | {
      kind: 'claude-phone';
      app: string;
      user: string;
      chip: string;
      lead: string;
      items: string[];
      ask: string;
      placeholder: string;
    };

export type Setup =
  | {
      kind: 'steps';
      heading: string;
      sub: string;
      steps: { title: string; text: string }[];
      note: string;
    }
  | {
      kind: 'options';
      heading: string;
      sub: string;
      options: { letter: string; title: string; text: string }[];
      command: string;
      note: string;
    };

export interface LandingPage {
  slug: LandingSlug;
  /** `client` property of the analytics events */
  client: string;
  /** `transport` property of the analytics events */
  transport: 'remote' | 'local';
  /** Name in the FAQ heading: "<name> + Desktop Commander FAQ" */
  faqName: string;
  /** Which logo stands for the client */
  mark: 'chatgpt' | 'claude';
  /** Alt text of that logo where it is shown on its own */
  markAlt: string;
  /** The one call to action of the page, repeated in every section */
  cta: { label: string; tryLabel: string; href: string };
  hero: {
    /** Above the headline: the directory rankings, or the two logos linked */
    pill: 'rankings' | 'link';
    /** Lines of the headline */
    title: TitlePart[][];
    sub: string;
    /** Weekly downloads and GitHub stars under the button */
    stats: boolean;
    window: ChatGptWindow | ClaudeWindow | ClaudeDesktopWindow;
    /**
     * Remote clients: the machine under the chat window, with what Desktop
     * Commander is doing on it for the conversation above.
     */
    machine?: { via: string; name: string; status: string; tool: string; busy: string; done: string };
  };
  showcase: { heading: string; sub: string; caption: string };
  capabilities: {
    heading: string;
    sub: string;
    files: { title: string; text: string; bullets: string[]; visual: FilesVisual };
    terminal: {
      title: string;
      text: string;
      bullets: string[];
      windowTitle: string;
      lines: { text: string; kind: 'command' | 'output' | 'assistant' }[];
    };
  };
  /** Remote clients: the page section about using it from a phone */
  phone?: { badge: string; heading: string; text: string; highlights: Highlight[]; visual: PhoneVisual };
  /** Local clients: the page section about everything running on the machine */
  local?: {
    badge: string;
    heading: string;
    text: string;
    highlights: Highlight[];
    diagram: {
      frame: string;
      app: { name: string; note: string };
      link: string;
      core: { name: string; note: string };
      access: string;
      parts: { icon: IconName; label: string }[];
    };
  };
  setup: Setup;
  final: { title: string[]; sub: string };
}

// ---------------------------------------------------------------------------
// Shared by the three pages
// ---------------------------------------------------------------------------

/** "Desktop Commander lets you do this with ...": five categories, three prompts each. */
export const SHOWCASE_CATEGORIES: { key: string; label: string; icon: IconName; prompts: string[] }[] = [
  {
    key: 'files',
    label: 'Files & folders',
    icon: 'folder-open',
    prompts: [
      'Organize my Downloads folder by file type and month',
      'Find every invoice PDF and rename it by date and vendor',
      'Clean out duplicate files in my Documents',
    ],
  },
  {
    key: 'media',
    label: 'Photos & media',
    icon: 'image',
    prompts: [
      'Convert all HEIC photos on my Desktop to JPG',
      'Resize every image in this folder for the web',
      'Compress these videos so they fit in an email',
    ],
  },
  {
    key: 'data',
    label: 'Documents & data',
    icon: 'file-text',
    prompts: [
      'Extract totals from every invoice into one spreadsheet',
      'Merge these 8 spreadsheets into one clean file',
      'Read sales.csv and chart revenue by month',
    ],
  },
  {
    key: 'dev',
    label: 'Code & dev',
    icon: 'code',
    prompts: [
      "Check my system's health and tell me what needs attention",
      'Install all dependencies for this project',
      'Launch my local server and watch the logs',
    ],
  },
  {
    key: 'automation',
    label: 'Automation',
    icon: 'server-cog',
    prompts: [
      'Connect this tool to my chat through its API',
      'Create a script that tidies my Desktop every Friday',
      'Schedule a nightly backup of my project folder',
    ],
  },
];

const CHAT_STEPS = [
  'Sorted 214 documents into folders by type.',
  'Grouped screenshots and photos by month.',
  'Moved 1,248 files, nothing was deleted.',
];

const FILE_BULLETS = [
  'Full read and write access to any folder you allow',
  'Search across thousands of files in seconds',
  'Batch operations: rename, move, convert, dedupe',
];

const TERMINAL_TEXT =
  'Run commands, scripts, and long running processes in your real terminal. Install packages, run builds, manage git, start servers, and automate anything you could type yourself.';

const TERMINAL_BULLETS = [
  'Real shell on your machine, not a cloud sandbox',
  'Keeps processes running and reads their output',
  'Uses the tools you already have installed',
];

/** The same short session in every terminal window; only the assistant's name changes. */
const terminalLines = (assistant: string): LandingPage['capabilities']['terminal']['lines'] => [
  { kind: 'command', text: 'git clone github.com/acme/api && cd api' },
  { kind: 'output', text: "Cloning into 'api'... done." },
  { kind: 'command', text: 'npm install && npm test' },
  { kind: 'output', text: 'added 312 packages in 9s' },
  { kind: 'output', text: 'Tests: 47 passed, 1 failed' },
  { kind: 'assistant', text: `✦ ${assistant}: the failing test expects a UTC date. Fixing utils/date.ts now.` },
];

/** The Claude conversation shown next to "Work with files" on both Claude pages. */
const CLAUDE_FILES_CHAT: FilesVisual = {
  kind: 'claude-chat',
  title: 'Invoice cleanup',
  user: 'Find every invoice PDF in my Documents and rename them by date and vendor',
  chip: 'Desktop Commander · searching 4,120 files',
  found: 'Found 87 invoices. Renamed them like this:',
  files: ['2026-06-14_AWS_invoice.pdf', '2026-06-02_Figma_invoice.pdf', '2026-05-28_Notion_invoice.pdf'],
  done: 'All 87 are renamed and sorted into folders by year. Want a spreadsheet with the totals next?',
};

/** Under the hero chat of the remote clients: the same job as in the conversation above it. */
const REMOTE_MACHINE = {
  via: 'Desktop Commander',
  name: 'Your computer',
  status: 'online',
  tool: 'move_file',
  busy: 'working',
  done: '1,248 files moved',
};

const REMOTE_SETUP_NOTE =
  "Requires running one command in your computer's terminal. Works on macOS and Windows. Disconnect any time.";

const listing = (slug: LandingSlug) => getClient(slug)!.listing!.href;

// ---------------------------------------------------------------------------
// The pages
// ---------------------------------------------------------------------------

const chatgpt: LandingPage = {
  slug: 'chatgpt',
  client: 'chatgpt',
  transport: 'remote',
  faqName: 'ChatGPT',
  mark: 'chatgpt',
  markAlt: 'ChatGPT',
  cta: { label: 'Add to ChatGPT', tryLabel: 'Try it in ChatGPT', href: listing('chatgpt') },
  hero: {
    pill: 'rankings',
    title: [
      [{ text: 'Give ChatGPT' }],
      [{ text: 'access to' }, { text: 'your', accent: true }],
      [{ text: 'local computer', accent: true }],
    ],
    sub: 'Edit documents, organize folders, and run commands on your own machine straight from your chat.',
    stats: true,
    window: {
      kind: 'chatgpt',
      status: 'connected to your machine',
      user: 'Organize my Downloads folder',
      workedFor: 'Worked for 42s',
      reply: 'Downloads folder organized successfully.',
      steps: CHAT_STEPS,
      composer: {
        prompts: ['Organize my Downloads folder', 'Convert these photos to JPG', 'Launch my local server'],
        sendBase: 'https://chatgpt.com/?q=',
        sendTarget: 'ChatGPT',
      },
      caption: 'Try it: sending opens this prompt in ChatGPT',
    },
    machine: REMOTE_MACHINE,
  },
  showcase: {
    heading: 'Desktop Commander lets you do this with ChatGPT',
    sub: 'Pick a category and see what a single prompt can do.',
    caption: 'Type it in ChatGPT. Desktop Commander does it on your computer.',
  },
  capabilities: {
    heading: 'This ChatGPT plugin will enable you to',
    sub: 'Two superpowers ChatGPT does not have on its own: your files and your terminal.',
    files: {
      title: 'Work with files on your computer',
      text: 'Read, write, search, and organize real files on your disk. Projects, documents, photos, datasets, without attaching them to the chat.',
      bullets: FILE_BULLETS,
      visual: {
        kind: 'video',
        src: '/videos/remote-mcp-fileorg-chatgpt.mp4',
        poster: '/videos/remote-mcp-fileorg-chatgpt-poster.webp',
        windowTitle: 'Live demo: ChatGPT organizing local files',
        title: 'Demo: ChatGPT organizes files on a real computer through Desktop Commander',
      },
    },
    terminal: {
      title: "Work in your machine's terminal",
      text: TERMINAL_TEXT,
      bullets: TERMINAL_BULLETS,
      windowTitle: 'your-machine ~ zsh',
      lines: terminalLines('ChatGPT'),
    },
  },
  phone: {
    badge: 'Works from your phone',
    heading: 'Control your computer from your pocket',
    text: 'The plugin follows your ChatGPT account, not one device. Ask from your phone or any browser and Desktop Commander carries it out on your machine at home.',
    highlights: [
      {
        icon: 'smartphone',
        title: 'From any device',
        description:
          'Open ChatGPT on your phone and your computer does the work. Kick off a build from the couch, check on it from the street.',
      },
      {
        icon: 'hard-drive',
        title: 'Your real machine',
        description:
          'Files, terminal, previews, and running processes on your actual computer. Not a sandbox in the cloud.',
      },
      {
        icon: 'zap',
        title: 'Always ready',
        description:
          'Link one or more machines to your account. As long as a machine is online, ChatGPT can work with it.',
      },
    ],
    visual: {
      kind: 'video',
      src: '/videos/remote-mcp-mobile.mp4',
      poster: '/videos/remote-mcp-mobile-poster.webp',
      title: 'Controlling a computer from a phone through ChatGPT and Desktop Commander',
    },
  },
  setup: {
    kind: 'steps',
    heading: 'Set up in two steps',
    sub: 'No config files, no API keys. About three minutes.',
    steps: [
      {
        title: 'Add the plugin in ChatGPT',
        text: 'Open Desktop Commander in the ChatGPT plugin directory and add it to your account.',
      },
      {
        title: 'Connect your machine',
        text: "Follow the instructions shown right in ChatGPT. You will run one command in your computer's terminal and your machine appears in the chat.",
      },
    ],
    note: REMOTE_SETUP_NOTE,
  },
  final: {
    title: ["Your computer is ChatGPT's", 'missing superpower'],
    sub: 'Add the Desktop Commander plugin and start working with real files and a real terminal today.',
  },
};

const claudeWeb: LandingPage = {
  slug: 'claude-web',
  client: 'claude-web',
  transport: 'remote',
  faqName: 'Claude',
  mark: 'claude',
  markAlt: 'Claude',
  cta: { label: 'Add to Claude', tryLabel: 'Try it in Claude', href: listing('claude-web') },
  hero: {
    pill: 'link',
    title: [
      [{ text: 'Give Claude' }],
      [{ text: 'access to' }, { text: 'your', accent: true }],
      [{ text: 'local computer', accent: true }],
    ],
    sub: 'Edit documents, organize folders, and run commands on your own machine straight from claude.ai in your browser.',
    stats: false,
    window: {
      kind: 'claude',
      title: 'Desktop file organization',
      user: 'Organize my Downloads folder',
      chip: 'Desktop Commander · working on your machine',
      reply: 'Done. Your Downloads folder is organized:',
      steps: CHAT_STEPS,
      composer: {
        prompts: ['Organize my Downloads folder', 'Convert these photos to JPG', 'Launch my local server'],
        sendBase: 'https://claude.ai/new?q=',
        sendTarget: 'Claude',
        model: { name: 'Opus 4.8', effort: 'High' },
      },
      caption: 'Try it: sending opens this prompt in Claude',
    },
    machine: REMOTE_MACHINE,
  },
  showcase: {
    heading: 'Desktop Commander lets you do this with Claude',
    sub: 'Pick a category and see what a single prompt can do.',
    caption: 'Type it in Claude. Desktop Commander does it on your computer.',
  },
  capabilities: {
    heading: 'This Claude connector will enable you to',
    sub: 'Two superpowers Claude does not have on its own: your files and your terminal.',
    files: {
      title: 'Work with files on your computer',
      text: 'Read, write, search, and organize real files on your disk. Projects, documents, photos, datasets, without attaching them to the chat.',
      bullets: FILE_BULLETS,
      visual: CLAUDE_FILES_CHAT,
    },
    terminal: {
      title: "Work in your machine's terminal",
      text: TERMINAL_TEXT,
      bullets: TERMINAL_BULLETS,
      windowTitle: 'your-machine ~ zsh',
      lines: terminalLines('Claude'),
    },
  },
  phone: {
    badge: 'Works from your phone',
    heading: 'Control your computer from your pocket',
    text: 'The connector follows your Claude account, not one device. Ask from your phone or any browser and Desktop Commander carries it out on your machine at home.',
    highlights: [
      {
        icon: 'smartphone',
        title: 'From any device',
        description:
          'Open Claude on your phone and your computer does the work. Kick off a task from the couch, check on it from the street.',
      },
      {
        icon: 'hard-drive',
        title: 'Your real machine',
        description:
          'Files, terminal, previews, and running processes on your actual computer. Not a sandbox in the cloud.',
      },
      {
        icon: 'zap',
        title: 'Always ready',
        description:
          'Link one or more machines to your account. As long as a machine is online, Claude can work with it.',
      },
    ],
    visual: {
      kind: 'claude-phone',
      app: 'Claude',
      user: "Check files on my laptop's Desktop. Give me a summary of what you see there.",
      chip: 'Desktop Commander · your Mac at home',
      lead: 'Your Desktop has 47 files:',
      items: ['23 screenshots from this month', '9 PDFs, mostly invoices', '6 project folders'],
      ask: 'Want me to tidy it up?',
      placeholder: 'Write a message...',
    },
  },
  setup: {
    kind: 'steps',
    heading: 'Set up in two steps',
    sub: 'No config files, no API keys. About three minutes.',
    steps: [
      {
        title: 'Add the connector in Claude',
        text: 'Open Desktop Commander in the Claude connectors directory and add it to your account.',
      },
      {
        title: 'Connect your machine',
        text: "Follow the instructions shown right in Claude. You will run one command in your computer's terminal and your machine appears in the chat.",
      },
    ],
    note: REMOTE_SETUP_NOTE,
  },
  final: {
    title: ["Your computer is Claude's", 'missing superpower'],
    sub: 'Add the Desktop Commander connector and start working with real files and a real terminal today.',
  },
};

const claudeDesktop: LandingPage = {
  slug: 'claude-desktop',
  client: 'claude-desktop',
  transport: 'local',
  faqName: 'Claude Desktop',
  mark: 'claude',
  markAlt: 'Claude Desktop',
  cta: { label: 'Add to Claude Desktop', tryLabel: 'Try it in Claude Desktop', href: listing('claude-desktop') },
  hero: {
    pill: 'link',
    title: [
      [{ text: 'Give Claude Desktop' }],
      [{ text: 'full control of', accent: true }],
      [{ text: 'your computer', accent: true }],
    ],
    sub: `The most popular file and terminal MCP for Claude Desktop. Fully local, free, open source, with ${STATS.weeklyDownloads} weekly downloads.`,
    stats: false,
    window: {
      kind: 'claude-desktop',
      badge: 'Beta',
      greeting: "Let's noodle",
      modes: ['Chat', 'Cowork'],
      context: ['Desktop', 'Manual'],
      recentLabel: 'Pinned or active',
      recent: [
        { name: 'Desktop cleanup', when: 'just now' },
        { name: 'HEIC batch conversion', when: 'yesterday' },
      ],
      composer: {
        prompts: ['Organize files on my Desktop', 'Convert these photos to JPG', 'Launch my local server'],
        href: listing('claude-desktop'),
        sendLabel: 'Get Desktop Commander for Claude Desktop',
        model: { name: 'Fable 5', effort: 'High' },
      },
      caption: 'Powered by the Desktop Commander MCP on your machine',
    },
  },
  showcase: {
    heading: 'Desktop Commander lets you do this with Claude Desktop',
    sub: 'Pick a category and see what a single prompt can do.',
    caption: 'Type it in Claude Desktop. Desktop Commander does it on your computer.',
  },
  capabilities: {
    heading: 'This Claude Desktop MCP will enable you to',
    sub: 'Two superpowers Claude Desktop does not have on its own: your files and your terminal.',
    files: {
      title: 'Work with files on your computer',
      text: 'Read, write, search, and organize real files on your disk. Projects, documents, photos, datasets. No uploading, no size limits, and nothing leaves your machine without you seeing it.',
      bullets: FILE_BULLETS,
      visual: CLAUDE_FILES_CHAT,
    },
    terminal: {
      title: "Work in your machine's terminal",
      text: TERMINAL_TEXT,
      bullets: TERMINAL_BULLETS,
      windowTitle: 'your-machine ~ zsh',
      lines: terminalLines('Claude'),
    },
  },
  local: {
    badge: '100% local MCP',
    heading: 'Everything happens on your machine',
    text: 'Claude Desktop already runs on your computer, so Desktop Commander plugs in as a local MCP server. No cloud bridge, no middleman, no waiting.',
    highlights: [
      {
        icon: 'cpu',
        title: 'Runs on your machine',
        description:
          'Desktop Commander is a local MCP server. It starts with Claude Desktop, works directly on your files and terminal, and needs no extra account.',
      },
      {
        icon: 'lock',
        title: 'Nothing extra leaves your machine',
        description:
          'Desktop Commander uploads nothing. Only what Claude reads in your conversation goes to the model, the same as any text you paste into a chat.',
      },
      {
        icon: 'git-branch',
        title: 'Free and open source',
        description: `The most popular file and terminal MCP, with ${STATS.weeklyDownloads} weekly downloads. Same server powers Cursor, Windsurf, and VS Code setups.`,
      },
    ],
    diagram: {
      frame: 'Your computer',
      app: { name: 'Claude Desktop', note: 'the app you already use' },
      link: 'local MCP',
      core: { name: 'Desktop Commander', note: 'free, open source, runs locally' },
      access: 'direct access',
      parts: [
        { icon: 'folder-open', label: 'Your files' },
        { icon: 'terminal', label: 'Your terminal' },
        { icon: 'monitor', label: 'Your processes' },
      ],
    },
  },
  setup: {
    kind: 'options',
    heading: 'Install it your way',
    sub: 'One click from the Claude directory, or one command in your terminal.',
    options: [
      {
        letter: 'A',
        title: 'From the Claude directory',
        text: 'Open Desktop Commander in the Claude connectors directory and add it to Claude Desktop. Easiest path, no terminal needed.',
      },
      {
        letter: 'B',
        title: 'With one command',
        text: 'Prefer the terminal? Run the installer below (needs Node.js v18 or newer), then restart Claude Desktop.',
      },
    ],
    command: 'npx @wonderwhy-er/desktop-commander@latest setup',
    note: 'Free and open source. Works on macOS and Windows. Restart Claude Desktop after installing.',
  },
  final: {
    title: ["Your computer is Claude Desktop's", 'missing superpower'],
    sub: 'Add the free, open source Desktop Commander MCP and start working with real files and a real terminal today.',
  },
};

export const landingPages: Record<LandingSlug, LandingPage> = {
  chatgpt,
  'claude-web': claudeWeb,
  'claude-desktop': claudeDesktop,
};
