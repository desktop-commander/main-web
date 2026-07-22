/**
 * Single source of truth for the /mcp/<client>/ landing pages.
 *
 * Adding a new client = adding one entry here (+ a logo in /public if available).
 * The dynamic route astro-src/pages/mcp/[client]/index.astro generates one page
 * per entry via getStaticPaths.
 *
 * `transport` drives what the "How it connects" + setup sections render:
 *  - 'remote' → connect via Desktop Commander Remote MCP (mcp.desktopcommander.app)
 *  - 'local'  → install the open-source MCP server on the machine
 */

export type Transport = 'remote' | 'local';
export type Capability = 'file-access' | 'terminal';

export interface SetupStep {
  title: string;
  body: string;
  /** Optional terminal command / config snippet rendered with a copy button */
  command?: string;
  /** Optional external link rendered as a button under the step */
  link?: { label: string; href: string };
}

export interface McpClient {
  slug: string;
  /** Display name, e.g. "ChatGPT" */
  name: string;
  /** Longer qualifier used in H1s, e.g. "ChatGPT (web & desktop)" */
  qualifier?: string;
  transport: Transport;
  /** Path under /public — omit to render a letter-tile fallback */
  logo?: string;
  /** Marketplace / directory listing where users enable Desktop Commander */
  listing?: { label: string; href: string };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    ctaHref: string;
  };
  howItConnects: {
    heading: string;
    body: string;
    bullets: string[];
  };
  capabilities: Capability[];
  /** Example prompts shown in the capability cards, keyed by capability */
  examplePrompts: Record<Capability, string[]>;
  setup: {
    requirements: string[];
    steps: SetupStep[];
  };
  limitations: string[];
  faqs: { question: string; answer: string }[];
}

export const CAPABILITY_META: Record<
  Capability,
  { title: string; description: string }
> = {
  'file-access': {
    title: 'Connect your local files',
    description:
      'Read, write, search, and organize real files on your disk — projects, documents, photos, datasets. No uploading, no size limits, nothing leaves your machine without you seeing it.',
  },
  terminal: {
    title: 'Work in your machine terminal',
    description:
      'Run commands, scripts, and long-running processes in your real terminal — install packages, run builds, manage git, automate anything you could type yourself.',
  },
};

export const mcpClients: McpClient[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    transport: 'remote',
    listing: {
      label: 'Desktop Commander in the ChatGPT app directory',
      href: 'https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425?category=developer-tools',
    },
    seo: {
      title: 'ChatGPT File Access & Terminal — Desktop Commander MCP for ChatGPT',
      description:
        'Connect ChatGPT to your local files and terminal with Desktop Commander Remote MCP. Read, edit, and organize real files and run commands on your own computer — right from ChatGPT.',
    },
    hero: {
      badge: 'Works with ChatGPT',
      headline: 'Give ChatGPT hands on your computer',
      subheadline:
        'Desktop Commander connects ChatGPT to your real files and terminal through Remote MCP. Edit documents, organize folders, and run commands on your own machine — from any browser.',
      ctaLabel: 'Add to ChatGPT',
      ctaHref:
        'https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425?category=developer-tools',
    },
    howItConnects: {
      heading: 'How ChatGPT reaches your machine',
      body: 'ChatGPT runs in the cloud, so it connects to your computer through Desktop Commander Remote MCP: a secure bridge between the ChatGPT app and the Desktop Commander agent running on your machine.',
      bullets: [
        'ChatGPT talks to Desktop Commander over Remote MCP — no port forwarding, no VPN',
        'Actions run on your machine only while it is online and linked to your account',
        'Works from any browser, including your phone',
      ],
    },
    capabilities: ['file-access', 'terminal'],
    examplePrompts: {
      'file-access': [
        '“Find every invoice PDF in my Downloads and rename them by date and vendor.”',
        '“Read my project folder and summarize what changed this week.”',
      ],
      terminal: [
        '“Clone this repo, install dependencies, and run the tests.”',
        '“Check what is using port 3000 and kill it.”',
      ],
    },
    setup: {
      requirements: [
        'A ChatGPT account with apps/connectors enabled',
        'A computer with Desktop Commander linked to your account',
      ],
      steps: [
        {
          title: 'Open Desktop Commander in the ChatGPT app directory',
          body: 'Find Desktop Commander in the ChatGPT app directory and add it to your ChatGPT account.',
          link: {
            label: 'Open in ChatGPT',
            href: 'https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425?category=developer-tools',
          },
        },
        {
          title: 'Connect your Desktop Commander account',
          body: 'When ChatGPT asks to connect, sign in with your Desktop Commander account to authorize the link.',
        },
        {
          title: 'Link your computer',
          body: 'Set up Desktop Commander on the machine you want ChatGPT to work with and sign in with the same account.',
          link: { label: 'Set up Remote MCP', href: 'https://mcp.desktopcommander.app/' },
        },
        {
          title: 'Start asking',
          body: 'Ask ChatGPT to read a folder, edit a file, or run a command — it now works on your real machine.',
        },
      ],
    },
    limitations: [
      'Your computer must be on and connected for ChatGPT to reach it.',
      'ChatGPT app/connector availability depends on your ChatGPT plan and region.',
      'You stay in control: Desktop Commander shows what runs on your machine.',
    ],
    faqs: [
      {
        question: 'Can ChatGPT access files on my computer?',
        answer:
          'Not by itself — ChatGPT runs in the cloud and only sees what you upload. With Desktop Commander Remote MCP, ChatGPT can read, write, and organize files directly on your machine, without uploads or size limits.',
      },
      {
        question: 'Can ChatGPT run terminal commands on my machine?',
        answer:
          'Yes. Through Desktop Commander, ChatGPT can run shell commands, scripts, and long-running processes in your real terminal — install packages, run builds, manage git, and more.',
      },
      {
        question: 'Is this different from ChatGPT’s built-in code interpreter?',
        answer:
          'Completely. Code interpreter runs in a temporary cloud sandbox with only the files you upload. Desktop Commander works on your actual computer: your real files, your installed tools, your environment.',
      },
      {
        question: 'Is it safe to connect ChatGPT to my computer?',
        answer:
          'The connection runs through Desktop Commander Remote MCP, authorized by your account. Your machine is only reachable while it is online and linked, and you can disconnect it at any time.',
      },
      {
        question: 'Does it work with the ChatGPT mobile or desktop apps?',
        answer:
          'Anywhere your ChatGPT account has the Desktop Commander app connected, it can reach your linked machine — including from your phone.',
      },
    ],
  },
  {
    slug: 'claude-web',
    name: 'Claude Web',
    qualifier: 'claude.ai in your browser',
    transport: 'remote',
    listing: {
      label: 'Desktop Commander in the Claude connectors directory',
      href: 'https://claude.ai/directory/connectors/218bbf02-d0dd-4aa9-8bdd-06bb2a8589af',
    },
    seo: {
      title: 'Claude Web File Access & Terminal — Desktop Commander Connector',
      description:
        'Connect Claude on the web (claude.ai) to your local files and terminal with the Desktop Commander connector. Work with real files and run commands on your own computer from any browser.',
    },
    hero: {
      badge: 'Works with claude.ai',
      headline: 'Claude in your browser, working on your machine',
      subheadline:
        'The Desktop Commander connector links claude.ai to your real files and terminal through Remote MCP. No desktop app required — Claude works on your computer from any browser tab.',
      ctaLabel: 'Add to Claude',
      ctaHref:
        'https://claude.ai/directory/connectors/218bbf02-d0dd-4aa9-8bdd-06bb2a8589af',
    },
    howItConnects: {
      heading: 'How claude.ai reaches your machine',
      body: 'Claude on the web connects to your computer through the Desktop Commander connector — a Remote MCP bridge between claude.ai and the Desktop Commander agent on your machine.',
      bullets: [
        'One-click connector from the Claude directory — no config files',
        'Actions run on your machine only while it is online and linked to your account',
        'Same connector works across your Claude devices',
      ],
    },
    capabilities: ['file-access', 'terminal'],
    examplePrompts: {
      'file-access': [
        '“Go through my Documents/Contracts folder and list everything expiring this year.”',
        '“Fix the broken links in the markdown files in my notes folder.”',
      ],
      terminal: [
        '“Run the build and paste me the errors.”',
        '“Set up a Python venv for this project and install the requirements.”',
      ],
    },
    setup: {
      requirements: [
        'A Claude account (claude.ai) with connectors available',
        'A computer with Desktop Commander linked to your account',
      ],
      steps: [
        {
          title: 'Open Desktop Commander in the Claude connectors directory',
          body: 'Find the Desktop Commander connector in the Claude directory and add it to your account.',
          link: {
            label: 'Open in Claude',
            href: 'https://claude.ai/directory/connectors/218bbf02-d0dd-4aa9-8bdd-06bb2a8589af',
          },
        },
        {
          title: 'Authorize the connection',
          body: 'Sign in with your Desktop Commander account when Claude asks to connect.',
        },
        {
          title: 'Link your computer',
          body: 'Set up Desktop Commander on the machine you want Claude to work with and sign in with the same account.',
          link: { label: 'Set up Remote MCP', href: 'https://mcp.desktopcommander.app/' },
        },
        {
          title: 'Start asking',
          body: 'Ask Claude to read a folder, edit files, or run a command — it now works on your real machine.',
        },
      ],
    },
    limitations: [
      'Your computer must be on and connected for Claude to reach it.',
      'Connector availability depends on your Claude plan.',
      'Prefer everything fully local? Use Claude Desktop with the local MCP instead.',
    ],
    faqs: [
      {
        question: 'Can Claude on the web access my local files?',
        answer:
          'Not on its own — claude.ai only sees what you attach. With the Desktop Commander connector, Claude can read, write, and organize files directly on your machine through Remote MCP.',
      },
      {
        question: 'How is this different from using Claude Desktop?',
        answer:
          'Claude Desktop runs on your machine and can use the local Desktop Commander MCP directly — free and open source. Claude Web runs in the cloud, so it needs the Remote MCP connector to reach your computer. Same capabilities, different transport.',
      },
      {
        question: 'Can Claude Web run terminal commands?',
        answer:
          'Yes. Once connected, Claude can run shell commands, scripts, and long-running processes on your linked machine — the same terminal access the local MCP provides.',
      },
      {
        question: 'Do I need to keep my computer on?',
        answer:
          'Yes — Claude reaches your machine live, so it must be online and linked to your Desktop Commander account while you work.',
      },
    ],
  },
  {
    slug: 'claude-desktop',
    name: 'Claude Desktop',
    transport: 'local',
    logo: 'claude-desktop-logo.png',
    seo: {
      title: 'Claude Desktop MCP — Full File & Terminal Access | Desktop Commander',
      description:
        'Give Claude Desktop full access to your files and terminal with the Desktop Commander MCP server. Free, open source, one-command install on Mac and Windows.',
    },
    hero: {
      badge: 'Works with Claude Desktop',
      headline: 'The MCP that gives Claude Desktop full control',
      subheadline:
        'Desktop Commander is the most popular file & terminal MCP server for Claude Desktop. One command installs it; then Claude can read, write, run, and automate everything on your machine — fully local, free, open source.',
      ctaLabel: 'Install locally',
      ctaHref: '#setup',
    },
    howItConnects: {
      heading: 'Runs 100% on your machine',
      body: 'Claude Desktop already runs locally, so Desktop Commander plugs in as a local MCP server — no cloud bridge, no account needed. Everything stays on your computer.',
      bullets: [
        'Free & open source — 26k+ weekly downloads',
        'One-command install, works on macOS and Windows',
        'No data leaves your machine',
      ],
    },
    capabilities: ['file-access', 'terminal'],
    examplePrompts: {
      'file-access': [
        '“Reorganize my Desktop into folders by file type and month.”',
        '“Search all my CSVs for rows mentioning this client and build a summary.”',
      ],
      terminal: [
        '“Start the dev server, watch the logs, and fix errors as they appear.”',
        '“Batch-convert every HEIC in this folder to JPG.”',
      ],
    },
    setup: {
      requirements: ['Node.js v18 or newer', 'Claude Desktop installed'],
      steps: [
        {
          title: 'Run the installer',
          body: 'One command in your terminal sets everything up and registers the MCP server with Claude Desktop.',
          command: 'npx @wonderwhy-er/desktop-commander@latest setup',
        },
        {
          title: 'Restart Claude Desktop',
          body: 'Quit and reopen Claude Desktop so it picks up the new MCP server.',
        },
        {
          title: 'Start asking',
          body: 'Ask Claude to work with your files or terminal — you will see Desktop Commander tools appear in the conversation.',
        },
      ],
    },
    limitations: [
      'Claude Desktop must be installed (free from Anthropic).',
      'Node.js v18+ is required for the npx installer.',
      'Want to use Claude from a browser or phone instead? See Claude Web with Remote MCP.',
    ],
    faqs: [
      {
        question: 'What can Claude Desktop do with Desktop Commander?',
        answer:
          'Everything you could do at your keyboard: read and edit any file on disk, search across folders, run terminal commands and scripts, manage long-running processes, automate repetitive file work — all through chat.',
      },
      {
        question: 'Is Desktop Commander free for Claude Desktop?',
        answer:
          'Yes. The local MCP server is free and open source (26k+ weekly downloads). You only need a Claude account for Claude Desktop itself.',
      },
      {
        question: 'Does my data stay local?',
        answer:
          'Yes. The local MCP runs entirely on your machine. File contents go only into your Claude conversation when Claude reads them — nothing is uploaded anywhere else.',
      },
      {
        question: 'How do I uninstall or disable it?',
        answer:
          'Run the setup command with the remove flag, or delete the desktop-commander entry from your Claude Desktop MCP configuration and restart the app.',
      },
    ],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    transport: 'local',
    logo: 'cursor-logo.png',
    seo: {
      title: 'Cursor MCP for Files & Terminal — Desktop Commander',
      description:
        'Add the Desktop Commander MCP server to Cursor for full file access and terminal control beyond your project folder. Free, open source, quick setup.',
    },
    hero: {
      badge: 'Works with Cursor',
      headline: 'Take Cursor beyond the project folder',
      subheadline:
        'Desktop Commander gives Cursor’s AI access to your whole machine — any file on disk, your real terminal, running processes — not just the workspace you have open.',
      ctaLabel: 'Set up in Cursor',
      ctaHref: '#setup',
    },
    howItConnects: {
      heading: 'Runs 100% on your machine',
      body: 'Cursor supports local MCP servers natively. Desktop Commander registers as one, extending Cursor’s agent from your open workspace to your entire machine.',
      bullets: [
        'Free & open source — same MCP that powers Claude Desktop setups',
        'Works alongside Cursor’s built-in tools',
        'No data leaves your machine',
      ],
    },
    capabilities: ['file-access', 'terminal'],
    examplePrompts: {
      'file-access': [
        '“Read the config from my other project in ~/work and apply the same settings here.”',
        '“Find every TODO across all my repos, not just this one.”',
      ],
      terminal: [
        '“Spin up the database container and run the migration.”',
        '“Profile this script and tell me where the time goes.”',
      ],
    },
    setup: {
      requirements: ['Node.js v18 or newer', 'Cursor installed'],
      steps: [
        {
          title: 'Open Cursor’s MCP settings',
          body: 'Go to Settings → MCP (or edit ~/.cursor/mcp.json directly) and add a new server.',
        },
        {
          title: 'Add Desktop Commander',
          body: 'Paste this server entry into your MCP configuration:',
          command:
            '{\n  "mcpServers": {\n    "desktop-commander": {\n      "command": "npx",\n      "args": ["-y", "@wonderwhy-er/desktop-commander"]\n    }\n  }\n}',
        },
        {
          title: 'Reload and start asking',
          body: 'Reload Cursor; Desktop Commander’s tools appear in the agent. Ask it to work with files or the terminal anywhere on your machine.',
        },
      ],
    },
    limitations: [
      'Node.js v18+ is required.',
      'Cursor already has terminal/file tools for the open workspace — Desktop Commander adds whole-machine scope and process management.',
    ],
    faqs: [
      {
        question: 'Why add Desktop Commander when Cursor has its own tools?',
        answer:
          'Cursor’s built-in tools focus on the workspace you have open. Desktop Commander extends the agent to your whole machine: any folder on disk, cross-project searches, background processes, and system-level terminal work.',
      },
      {
        question: 'Does it conflict with Cursor’s built-in terminal?',
        answer:
          'No. It registers as a separate MCP server; Cursor’s agent chooses the right tool per task. You can enable or disable it any time in MCP settings.',
      },
      {
        question: 'Is it free?',
        answer:
          'Yes — the local MCP server is free and open source, with 26k+ weekly downloads.',
      },
      {
        question: 'Does it work in other editors too?',
        answer:
          'Yes. Any MCP-capable client works — Windsurf, VS Code with MCP support, Claude Desktop, and more.',
      },
    ],
  },
];

export function getClient(slug: string): McpClient | undefined {
  return mcpClients.find((c) => c.slug === slug);
}
