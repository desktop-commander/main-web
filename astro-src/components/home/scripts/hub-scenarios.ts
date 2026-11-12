/**
 * Content for the hero hub: AI clients on top, Desktop Commander in the
 * middle, your computer below (HeroHub.astro, played by ./hub.ts).
 *
 * One request per client. Each request names the Desktop Commander tool that
 * handles it and which part of the computer does the work. Tool names are
 * real Desktop Commander tools; file names and numbers are examples.
 */

export type HubClientId = 'chatgpt' | 'claude' | 'cursor' | 'any';
export type HubPart = 'files' | 'terminal' | 'processes';

export interface HubClient {
  id: HubClientId;
  name: string;
  /** Shorter name for narrow screens */
  short?: string;
  /** Where the tile links to */
  href: string;
  /** Accessible name of the link */
  label: string;
}

export interface HubRequest {
  client: HubClientId;
  /** What is asked in the chat */
  prompt: string;
  /** Desktop Commander tool that runs */
  tool: string;
  /** Shown under the tool name while it runs */
  arg: string;
  /** Shown under the tool name when it is done */
  result: string;
  /** Which part of the computer does the work */
  part: HubPart;
  /** How that part shows the work (see the actions in hub.ts) */
  action: 'sort' | 'test' | 'cpu' | 'find';
  /** What the chat answers */
  answer: string;
}

/** Same order as HUB_REQUESTS: request N belongs to client N. */
export const HUB_CLIENTS: HubClient[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    href: '/mcp/chatgpt/',
    label: 'Desktop Commander for ChatGPT',
  },
  {
    id: 'claude',
    name: 'Claude',
    href: '/mcp/claude-web/',
    label: 'Desktop Commander for Claude',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    href: '/mcp/cursor/',
    label: 'Desktop Commander for Cursor',
  },
  {
    id: 'any',
    name: 'Your AI client',
    short: 'Any client',
    href: '#install',
    // holds both visible names, so the spoken name always includes the one on screen
    label: 'Any client: install Desktop Commander in your AI client',
  },
];

/** Names are short on purpose: the columns of the computer are narrow on small screens. */
export const HUB_FILES = {
  /** The Desktop before it is tidied */
  loose: ['IMG_2041.png', 'invoice-12.pdf', 'notes-v2.docx', 'scan-0003.jpg', 'report-q3.pdf'],
  /** and after */
  folders: [
    { name: 'Images', count: 112 },
    { name: 'Invoices', count: 38 },
    { name: 'Documents', count: 64 },
  ],
  /** What the search for the March invoice finds */
  found: {
    path: 'Invoices/2026',
    files: ['february.pdf', 'march.pdf', 'april.pdf'],
    match: 1,
  },
} as const;

export const HUB_FILE_TOTAL = HUB_FILES.folders.reduce((n, f) => n + f.count, 0);

export const HUB_TERMINAL = {
  ps1: '$',
  cmd: 'npm test',
  lines: [
    { k: 'dim', s: 'PASS auth.test.ts' },
    { k: 'dim', s: 'PASS api.test.ts' },
    { k: 'dim', s: 'PASS db.test.ts' },
    { k: 'ok', s: '✓ 48 passed 2.1s' },
  ],
} as const;

/** Sorted by CPU, the first one is the answer. */
export const HUB_PROCESSES = [
  { name: 'node', cpu: 84 },
  { name: 'postgres', cpu: 9 },
  { name: 'docker', cpu: 5 },
  { name: 'redis', cpu: 2 },
] as const;

export const HUB_REQUESTS: HubRequest[] = [
  {
    client: 'chatgpt',
    prompt: 'Tidy up my Desktop',
    tool: 'move_file',
    arg: '~/Desktop',
    result: `${HUB_FILE_TOTAL} files moved`,
    part: 'files',
    action: 'sort',
    answer: `${HUB_FILE_TOTAL} files sorted into ${HUB_FILES.folders.length} folders`,
  },
  {
    client: 'claude',
    prompt: 'Run the tests for this project',
    tool: 'start_process',
    arg: HUB_TERMINAL.cmd,
    result: 'exit code 0',
    part: 'terminal',
    action: 'test',
    answer: 'All 48 tests passed',
  },
  {
    client: 'cursor',
    prompt: 'What is using all my CPU?',
    tool: 'list_processes',
    arg: 'sorted by CPU',
    result: '312 processes',
    part: 'processes',
    action: 'cpu',
    answer: `${HUB_PROCESSES[0].name}, at ${HUB_PROCESSES[0].cpu}% CPU`,
  },
  {
    client: 'any',
    prompt: 'Find the invoice from March',
    tool: 'start_search',
    arg: '"invoice march"',
    result: '1 match',
    part: 'files',
    action: 'find',
    answer: `Found it in ${HUB_FILES.found.path}`,
  },
];
