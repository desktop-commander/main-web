/**
 * Content for the homepage (astro-src/pages/index.astro and
 * astro-src/components/home/*).
 *
 * Copy lives here so it can be edited without touching markup. Shared facts
 * (URLs, stats, rankings) still come from src/components/home-mcp/links.ts and
 * the client list from ./mcp-clients, so they are updated once for every page.
 */
import {
  CHATGPT_CONNECTOR,
  CLAUDE_CONNECTOR,
  GITHUB_URL,
  LOCAL_MCP_URL,
  MCP_ENDPOINT,
  NPM_URL,
  PLATFORM_URL,
  RANKINGS,
  STATS,
} from '../../src/components/home-mcp/links';

export {
  CHATGPT_CONNECTOR,
  CLAUDE_CONNECTOR,
  GITHUB_URL,
  LOCAL_MCP_URL,
  MCP_ENDPOINT,
  NPM_URL,
  PLATFORM_URL,
  RANKINGS,
  STATS,
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
  titleLine1: 'Use your computer',
  titleLine2: 'from chat',
  lead: 'Desktop Commander gives AI chat access to your computer. No more copying output back and forth.',
  body: 'It reads your files, runs the commands, sees the results, and continues from there. Works with ChatGPT, Claude and Codex, on your own machine or a server you own.',
  stats: [
    { href: NPM_URL, value: STATS.weeklyDownloads, label: 'weekly npm downloads', icon: 'download' },
    { href: GITHUB_URL, value: STATS.githubStars, label: 'GitHub stars', icon: 'star' },
  ],
} as const;

// ---------------------------------------------------------------------------
// Install chooser
// ---------------------------------------------------------------------------

export const install = {
  heading: 'Install it where you chat',
  sub: 'Pick the assistant you already use. Setup takes a couple of minutes and you choose which machine it reaches.',
  options: [
    {
      slug: 'chatgpt',
      name: 'ChatGPT',
      href: CHATGPT_CONNECTOR,
      cta: 'Install in ChatGPT',
      description:
        'Add Desktop Commander to ChatGPT, then work with your real files and terminal in an ordinary conversation.',
      bullets: [
        'Works on web and on your phone',
        'Reaches a laptop, desktop, or server you choose',
        'Sign in with your email, connect your device',
      ],
    },
    {
      slug: 'claude',
      name: 'Claude',
      href: CLAUDE_CONNECTOR,
      cta: 'Install in Claude',
      description:
        'Connect Claude to a computer you are not sitting in front of, from the web or your phone.',
      bullets: [
        'Claude on web, desktop, and mobile',
        'Your actual files and programs, not a sandbox',
        'Sign in with your email, connect your device',
      ],
    },
  ],
  anyClient: {
    summary:
      'Using another MCP client? Cursor, VS Code and custom agents connect with the remote endpoint.',
    details:
      'Register this endpoint as a remote MCP server with OAuth, then authorize once. Tokens are scoped per client and can be revoked from Settings.',
    endpoint: MCP_ENDPOINT,
  },
  local: {
    text: 'Prefer to run it yourself? The local MCP server is free and open source, and works with Claude Desktop, Cursor, Windsurf and any other MCP client.',
    cta: 'Install local MCP',
    href: LOCAL_MCP_URL,
  },
} as const;

/** Best directory ranking per platform, shown as a small proof chip on the install cards. */
export const topRanking = (platform: 'chatgpt' | 'claude') =>
  [...RANKINGS].filter((r) => r.platform === platform).sort((a, b) => a.rank - b.rank)[0];

// ---------------------------------------------------------------------------
// Remote MCP
// ---------------------------------------------------------------------------

export const remote = {
  heading: 'Your machine, from anywhere',
  sub: 'Desktop Commander Remote MCP lets remote AI clients like ChatGPT and Claude work directly with files and commands on your own computer.',
  highlights: [
    {
      icon: 'hard-drive',
      title: 'Your real machine',
      description:
        'Give AI assistants access to local files, terminal, previews, and running processes. Not a sandbox.',
    },
    {
      icon: 'bot',
      title: 'Works in web AI clients',
      description: 'Connect ChatGPT, Claude, and other AI services directly to your computer.',
    },
    {
      icon: 'smartphone',
      title: 'From any device',
      description: 'Use it yourself from another device, for example from your phone to your PC.',
    },
    {
      icon: 'zap',
      title: 'Same Desktop Commander core',
      description:
        'AI that can read, write, run, and act on your system. Connect one or more devices.',
    },
  ],
  cta: 'Get Remote MCP',
  secondaryLead: 'Already set up?',
  secondary: 'Manage your devices',
  video: '/videos/remote-mcp-mobile.mp4',
  videoTitle: 'Desktop Commander Remote MCP demo: controlling your computer from your phone',
  caption: 'Controlling your computer from your phone via Remote MCP',
} as const;

// ---------------------------------------------------------------------------
// Use cases
// ---------------------------------------------------------------------------

export const useCases = {
  heading: 'What people use it for',
  sub: 'Ordinary work on a real machine, done in the chat you already have open.',
  buckets: [
    {
      id: 'files',
      title: 'Files and documents',
      description:
        'Finding things, comparing versions, renaming and sorting, searching large local archives.',
    },
    {
      id: 'code',
      title: 'Code and projects',
      description: 'Writing, running and fixing code on your own machine.',
    },
    {
      id: 'servers',
      title: 'Servers and devices',
      description: 'Checking a VPS, deploying a change, reading logs, home automation.',
    },
    {
      id: 'fix',
      title: 'Troubleshooting',
      description:
        'Why a program will not start, a disk that has filled up, a service that stopped working.',
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const howItWorks = {
  heading: 'How it works',
  sub: 'Set it up once, in a few minutes.',
  steps: [
    {
      title: 'Sign up',
      description: 'Create an account on mcp.desktopcommander.app with your email.',
    },
    {
      title: 'Connect a device',
      description:
        'Add the computer you want to reach: a laptop, a desktop, or a server. Connect as many as you need.',
    },
    {
      title: 'Connect your AI client',
      description:
        'Install the plugin in ChatGPT, or add the connector in Claude. Any other MCP client works too.',
    },
    {
      title: 'Start chatting',
      description:
        'Ask for what you want done. Your assistant works on the machine and reports back.',
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Prompt library
// ---------------------------------------------------------------------------

export const prompts = {
  heading: 'Explore Prompt Library',
  sub: '60+ prompts organized by workflow, from codebase exploration to task automation',
  cta: 'Browse All Prompts',
  ctaHref: '/library/prompts/',
  note: '60+ workflows across development, automation, and optimization',
  categories: [
    {
      title: 'Explore codebase',
      prompts: [
        {
          icon: 'code',
          title: 'Explain Codebase or Repository',
          description: 'Understand and analyze your codebase structure',
          url: '/library/prompts/explain-codebase-or-repository/',
        },
        {
          icon: 'git-compare',
          title: 'Compare Config Files to Baseline',
          description: 'Compare configuration files against standards',
          url: '/library/prompts/compare-config-files-to-baseline/',
        },
        {
          icon: 'trash',
          title: 'Clean Up Unused Code',
          description: 'Remove dead code and optimize your project',
          url: '/library/prompts/clean-up-unused-code/',
        },
      ],
    },
    {
      title: 'Write documentation',
      prompts: [
        {
          icon: 'file-text',
          title: 'Create Project Documentation',
          description: 'Generate comprehensive project documentation',
          url: '/library/prompts/create-project-documentation/',
        },
        {
          icon: 'database',
          title: 'Create Database Schema Diagram',
          description: 'Visualize your database structure and relationships',
          url: '/library/prompts/create-database-schema-diagram/',
        },
        {
          icon: 'server',
          title: 'Document Ansible Configuration',
          description: 'Create clear documentation for your Ansible setup',
          url: '/library/prompts/document-ansible-configuration/',
        },
      ],
    },
    {
      title: 'Deploy',
      prompts: [
        {
          icon: 'cloud',
          title: 'Set Up Cloud Infrastructure',
          description: 'Deploy scalable cloud infrastructure from scratch',
          url: '/library/prompts/set-up-cloud-infrastructure/',
        },
        {
          icon: 'server',
          title: 'Set Up WordPress Environment',
          description: 'Configure complete WordPress development environment',
          url: '/library/prompts/set-up-wordpress-environment/',
        },
        {
          icon: 'zap',
          title: 'Build and Deploy Landing Page',
          description: 'Create and deploy a professional landing page',
          url: '/library/prompts/build-and-deploy-landing-page/',
        },
      ],
    },
    {
      title: 'Automate tasks',
      prompts: [
        {
          icon: 'folder-open',
          title: 'Organise my Downloads folder',
          description: 'Sort messy downloads into organized folders',
          url: '/library/prompts/organise-my-downloads-folder/',
        },
        {
          icon: 'file-text',
          title: 'Extract Data from PDFs',
          description: 'Pull structured data from PDF documents',
          url: '/library/prompts/extract-data-from-pdfs/',
        },
        {
          icon: 'image',
          title: 'Convert HEIC to PNG',
          description: 'Batch convert image formats efficiently',
          url: '/library/prompts/convert-heic-to-png/',
        },
      ],
    },
    {
      title: 'Optimize workflow',
      prompts: [
        {
          icon: 'book-open',
          title: 'Create Knowledge Base Folder',
          description: 'Organize information into searchable knowledge base',
          url: '/library/prompts/create-knowledge-base-folder/',
        },
        {
          icon: 'database',
          title: 'Consolidate Data Files into One',
          description: 'Merge multiple data sources into unified format',
          url: '/library/prompts/consolidate-data-files-into-one/',
        },
        {
          icon: 'search',
          title: 'Automate Competitor Research',
          description: 'Set up automated competitive analysis workflows',
          url: '/library/prompts/automate-competitor-research/',
        },
      ],
    },
  ],
} as const;

export const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export const clients = {
  heading: 'Works with your AI client',
  sub: 'One Desktop Commander, every AI client you use.',
} as const;

// ---------------------------------------------------------------------------
// Community
// ---------------------------------------------------------------------------

export const community = {
  heading: 'From the community',
  stats: [
    { value: 9.52, decimals: 2, suffix: '/10', label: 'User Rating' },
    {
      value: parseFloat(STATS.weeklyDownloads),
      decimals: 0,
      suffix: STATS.weeklyDownloads.replace(/^[\d.]+/, ''),
      label: 'Weekly Downloads',
    },
    {
      value: parseFloat(STATS.githubStars),
      decimals: 0,
      suffix: STATS.githubStars.replace(/^[\d.]+/, ''),
      label: 'GitHub Stars',
    },
  ],
  testimonials: [
    {
      quote:
        'It is a great tool, thank you, I like using it, as it gives claude an ability to do surgical edits, making it more like a human developer.',
      author: 'naranbaz',
    },
    {
      quote:
        "Life saver! I was paying for both Claude + Cursor which felt duplicated. This solves that perfectly. With MCP + web search, it writes code with the latest updates. So good when Cursor doesn't work or fast requests run out.",
      author: 'play365alltime',
    },
    {
      quote:
        'I had 76 errors in 23 files in my Svelte 5 project. Used desktop-commander, sequentialthinking, and tree-sitter to fix them all. Never resolved type errors this quickly with AI before!',
      author: 'dependablecalls',
    },
    {
      quote: "I'm the one who is grateful for this, which is the best MCP that exists!",
      author: 'Dhiego Pagotto',
    },
    { quote: 'Just joined I absolutely love this thing', author: 'Uloi' },
    { quote: 'happy command coding everyone - god I love this tool', author: 'Geoff F' },
    {
      quote:
        "Wow, I've been building something similar. This makes my project so much easier to build now. I'm truly grateful. Thank you!",
      author: 'Creedo',
    },
    {
      quote: "btw @DC Dmitry , thanks for such great MCP 🙂 I'm loving it 🙂",
      author: 'Damian Pastorini',
    },
    {
      quote:
        'Switched from Windsurf to Claude MCP and love it! No more token limits or cascade issues. Can code as much as I want without worrying about costs. This is much more than just code editing!',
      author: 'jesseburstrom5920',
    },
    {
      quote:
        'Been using this MCP daily for a couple of months now and onboarded a bunch of buddies onto it as well, a go to in my arsenal, great work!!',
      author: 'Bjorn Melin',
    },
    {
      quote:
        'Played with DesktopCommander today, replaced FileServer and continued my project. The diff-based editing is awesome - could continue longer in the same chat before hitting limits. Great!',
      author: 'eszpee',
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const pricing = {
  heading: 'Pricing',
  sub: 'Start free. Upgrade when you outgrow it.',
  plans: [
    {
      name: 'Free',
      price: '$0',
      period: '/ month',
      features: [
        '10,000 tool calls per month',
        'ChatGPT, Claude and any MCP client',
        'Community support',
      ],
      cta: { label: 'Install', href: '#install', external: false },
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$20',
      period: '/ month',
      features: ['Unlimited tool calls', 'Priority support'],
      cta: { label: 'Upgrade to Pro', href: PLATFORM_URL, external: true },
      highlighted: true,
    },
  ],
  note: 'The local MCP server stays free and open source.',
  noteLink: { label: 'See all plans', href: '/pricing/' },
} as const;

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const faq = {
  heading: 'Frequently Asked Questions',
  sub: 'Everything you need to know about Desktop Commander.',
  items: [
    {
      question: 'What is Desktop Commander?',
      answer:
        'Desktop Commander gives AI chat access to your computer, so it works on it directly instead of telling you what to do. It reads and writes files, runs commands, and manages processes on your own machine, then continues from the results.',
    },
    {
      question: 'What is Desktop Commander Remote MCP?',
      answer:
        'Remote MCP lets you use Desktop Commander from remote AI clients like ChatGPT, Claude, and other AI services while still working with your own machine. You connect one or more of your devices, and your AI assistant gets access to local files, terminal, previews, and running processes on them. You can also use it yourself from another device, for example controlling your PC from your phone. Get started at mcp.desktopcommander.app.',
    },
    {
      question: 'Should I use the local or remote MCP?',
      answer:
        'Use Remote MCP when your AI client runs in the browser, like ChatGPT or Claude web, or when you want to reach your machine from another device. Use the local MCP server if you work at your computer in a desktop MCP client like Claude Desktop, Cursor, or Windsurf; it runs entirely on your machine and is free and open source. Both give AI the same core ability: to read, write, run, and act on your system.',
    },
    {
      question: 'What is an MCP?',
      answer:
        "MCP stands for Model Context Protocol. It's a framework developed by Anthropic that allows AI language models like Claude to interact with external tools and services. MCPs give Claude the ability to perform actions in the real world: in this case, to read and write files, execute terminal commands, and manage processes on your computer.",
    },
    {
      question: 'How does Desktop Commander differ from coding tools like Cursor or Windsurf?',
      answer:
        "Unlike tools like Cursor or Windsurf which are primarily designed as coding IDEs, Desktop Commander provides a more flexible, solution-centric approach. It's not confined to a coding box: it can handle coding tasks but also excels at exploring codebases, drawing diagrams, running automation processes, organizing files, and working with multiple projects simultaneously.",
    },
    {
      question: 'Is it safe to give AI access to my file system?',
      answer:
        'Desktop Commander operates within safety boundaries: it typically only works with files you direct it to, can only perform actions your user account has permission for, and processes files locally on your machine. No file data is sent to external servers beyond your AI provider conversations.',
    },
    {
      question: 'How does Desktop Commander collect feedback and usage data?',
      answer:
        'The MCP has three systems: local usage analytics (always active, stays on your machine), anonymous telemetry (can be disabled), and optional feedback system (user controlled).',
    },
    {
      question: "I'm having trouble with the MCP. Where can I get help?",
      answer:
        'Join our Discord server for community support, check the GitHub issues for known problems, or review our comprehensive FAQ for troubleshooting tips. If you encounter a new issue, please consider opening a GitHub issue with details about your problem.',
    },
  ],
  help: {
    title: 'Need more help?',
    text: 'The Help center covers setup, connecting your computers, plans and billing, and fixes for common problems.',
    cta: 'Open the Help center',
    href: '/help/',
  },
} as const;

// ---------------------------------------------------------------------------
// Closing band
// ---------------------------------------------------------------------------

export const finalCta = {
  heading: 'Put your computer in the chat',
  sub: 'Install the connector, sign in, and connect the machine you want to reach.',
} as const;
