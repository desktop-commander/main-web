/**
 * Content for /welcome/ (astro-src/pages/welcome.astro): the page the local
 * MCP installer opens when installation finishes.
 *
 * Job of the page: confirm the install worked, then make the case for trying
 * Remote MCP: what it adds over the local server the visitor just installed.
 *
 * Use cases are drawn from Remote MCP research (Nov 2026 KB): the Aug 2026
 * Remote interviews, the PULL customer cases, the Oct 2026 Remote survey and
 * Jim Lunsford's article. They are written generically on purpose: no
 * customer is named or identifiable.
 */
import {
  CHATGPT_CONNECTOR,
  CLAUDE_CONNECTOR,
  MCP_ENDPOINT,
  PLATFORM_URL,
} from '../../src/components/home-mcp/links';

/** Tags every Remote link from this page, so sign-ups can be attributed to it. */
export const WELCOME_EXPERIMENT = 'lp-welcome-remote';
export const TRY_REMOTE_URL = `${PLATFORM_URL}?utm_source=dc_welcome&utm_medium=local_mcp&utm_campaign=try_remote`;

/** Hero: the install worked, here are first prompts to try in the AI app on this computer. */
export const welcomeHero = {
  status: 'Local MCP installed',
  titleLine1: "You're all set",
  titleLine2: 'on this computer.',
  lead: 'Desktop Commander is connected to the AI app on this computer. Switch back to it and try one of these:',
  prompts: [
    "What's taking up the most space in my Downloads folder?",
    'Tidy up my Desktop: sort the files into folders by type.',
    "What's using the most CPU and memory on this computer right now?",
  ],
  copy: 'Copy',
  more: 'More prompts',
  moreHref: '/library/prompts/',
} as const;

/**
 * "Want more?": right under the prompts. What Remote MCP is, three reasons to
 * add it, and buttons straight to the ChatGPT plugin and the Claude connector.
 * Other clients and more computers go to the platform, which has the setup
 * instructions after sign-in.
 */
export const welcomeMore = {
  eyebrow: 'Remote MCP',
  heading: 'Want more?',
  sub: 'Desktop Commander Remote connects your computers to AI apps on the web and on your phone. Same tools as the local one: files, terminal and processes.',
  values: [
    {
      icon: 'smartphone',
      title: 'Use it from your phone',
      description:
        'Ask ChatGPT or Claude on your phone. The work happens on your computer at home or at the office.',
    },
    {
      icon: 'server',
      title: 'Control several computers and servers',
      description:
        'Connect laptops, desktops, servers and VMs, then tell the AI which one to work on.',
    },
    {
      icon: 'bot',
      title: 'Same computers, many agents',
      description: 'Connect the same devices to every AI app you use:',
      agents: ['ChatGPT', 'Claude', 'Codex', 'Cursor', 'VS Code', 'Windsurf', 'any MCP client'],
    },
  ],
  add: [
    { client: 'chatgpt', label: 'Add to ChatGPT', href: CHATGPT_CONNECTOR },
    { client: 'claude', label: 'Add to Claude', href: CLAUDE_CONNECTOR },
  ],
  otherLead: 'Another AI app, or more computers?',
  other: 'Sign in for setup instructions',
  note: 'Free for 10,000 tool calls a month.',
} as const;

/** Local versus Remote. Rows line up across the two columns. */
export const compare = {
  heading: 'What Remote adds',
  sub: 'Same Desktop Commander tools: files, terminal and processes. Remote changes where you can use them from, and how many computers they reach.',
  local: { name: 'Local MCP', tag: 'What you just installed' },
  remote: { name: 'Remote MCP', tag: 'Try it free' },
  rows: [
    {
      label: 'AI apps',
      local: 'Claude Desktop, Cursor, Windsurf and other desktop MCP apps',
      remote: 'ChatGPT, Claude on web, desktop and mobile, Cursor, and any MCP client',
    },
    {
      label: 'Where you can be',
      local: 'At this computer',
      remote: 'Anywhere, including on your phone',
    },
    {
      label: 'Computers it reaches',
      local: 'This one',
      remote: 'Laptops, desktops, servers and VMs, several from one chat',
    },
    {
      label: 'Setup',
      local: 'Done',
      remote: 'Sign in with your email, connect a computer, add the app or connector',
    },
    {
      label: 'Price',
      local: 'Free and open source',
      remote: 'Free up to 10,000 tool calls a month. Pro is $20 a month for unlimited',
    },
  ],
};

/** Jobs Remote users told us about, in plain words. */
export const uses = {
  heading: 'What people use Remote for',
  sub: 'Jobs Remote users describe to us, done in the chat they already have open.',
  items: [
    {
      icon: 'smartphone',
      title: 'Keep working from your phone',
      description:
        'Start a long job at your desk, then check on it, steer it or collect the result from your phone while you are out.',
    },
    {
      icon: 'server',
      title: 'One chat, several machines',
      description:
        'Split a big batch job across a Linux box and three Windows PCs, all from one ChatGPT conversation.',
    },
    {
      icon: 'wrench',
      title: 'Fix the computer, not just the code',
      description:
        'Set up SSH, change power settings, find what filled the disk. The AI checks the real machine, makes the change, then confirms it worked.',
    },
    {
      icon: 'terminal',
      title: 'No more remote-desktop copy and paste',
      description:
        'Work with files, PowerShell and logs on a remote Windows PC straight from chat, instead of remoting in and pasting commands back and forth.',
    },
  ],
} as const;

export const welcomeFaq = {
  heading: 'Questions about Remote',
  sub: 'What changes, what stays the same.',
  items: [
    {
      question: 'Do I have to give up the local MCP?',
      answer:
        'No. The local MCP you just installed keeps working in your desktop apps. Remote is a separate connection you add on top, for ChatGPT, Claude on the web and phone, and your other computers.',
    },
    {
      question: 'Which AI apps work with Remote?',
      answer: `ChatGPT through the Desktop Commander plugin, Claude on web, desktop and mobile through the connector, and any other MCP client through the remote endpoint at ${MCP_ENDPOINT.replace(/^https?:\/\//, '')}.`,
    },
    {
      question: 'Can I connect more than one computer?',
      answer:
        'Yes. Connect a laptop, a desktop, a server or a VM, as many as you need, and tell the AI which one to work on.',
    },
    {
      question: 'What does Remote cost?',
      answer:
        'The free plan includes 10,000 tool calls a month. Pro is $20 a month plus VAT where it applies, with unlimited tool calls. The local MCP stays free and open source.',
    },
  ],
};

export const welcomeFinal = {
  heading: 'Your computer, from the chat in your pocket',
  sub: 'Sign up free, connect this computer, and ask ChatGPT or Claude for something from your phone.',
  cta: 'Try Remote free',
  secondary: 'Browse prompts',
  secondaryHref: '/library/prompts/',
};
