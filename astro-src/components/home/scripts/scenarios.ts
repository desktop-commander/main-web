/**
 * Example sessions played on the hero stage.
 *
 * Each scenario is one round trip: a prompt in the chat, a few Desktop
 * Commander tool calls that run on the machine, and the answer that comes
 * back. Tool names are the real Desktop Commander tools. The sessions are
 * illustrative, and the stage is labelled "Example session".
 *
 * Used by HeroStage.astro (tab labels) and stage.ts (playback).
 */

export type TermKind = 'cmd' | 'out' | 'ok' | 'warn' | 'err' | 'dim' | 'add' | 'del';

export interface TermLine {
  k: TermKind;
  s: string;
}

export interface ToolStep {
  /** Desktop Commander tool name */
  tool: string;
  /** Short argument shown next to the tool name in the chat */
  arg: string;
  /** One-line result shown in the chat once the call returns */
  result: string;
  /** What appears on the machine while the call runs */
  term: TermLine[];
}

export interface Scenario {
  id: string;
  /** Tab label */
  tab: string;
  /** Tab sub-label */
  hint: string;
  client: 'chatgpt' | 'claude';
  device: string;
  /** Shell prompt shown before commands */
  ps1: string;
  prompt: string;
  steps: ToolStep[];
  answer: string;
  /** Result chips shown on the machine at the end */
  chips: { v: string; l: string }[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'files',
    tab: 'Files',
    hint: 'Sort a messy folder',
    client: 'chatgpt',
    device: 'MacBook Pro',
    ps1: 'you@macbook ~ %',
    prompt: 'Sort my Downloads folder by type and set the duplicates aside.',
    steps: [
      {
        tool: 'list_directory',
        arg: '~/Downloads',
        result: '412 files',
        term: [
          { k: 'cmd', s: 'ls ~/Downloads | wc -l' },
          { k: 'out', s: '     412' },
        ],
      },
      {
        tool: 'start_process',
        arg: 'find duplicates',
        result: '38 duplicates',
        term: [
          { k: 'cmd', s: 'python3 dedupe.py ~/Downloads --dry-run' },
          { k: 'out', s: 'hashing 412 files (3.1 GB) ... done' },
          { k: 'warn', s: '38 duplicates found (1.2 GB)' },
        ],
      },
      {
        tool: 'move_file',
        arg: 'sort by type',
        result: '6 folders',
        term: [
          { k: 'cmd', s: 'python3 sort_downloads.py --by type' },
          { k: 'out', s: 'Documents/     128 files' },
          { k: 'out', s: 'Images/        143 files' },
          { k: 'out', s: 'Installers/     22 files' },
          { k: 'out', s: 'Archives/       31 files' },
          { k: 'out', s: 'Video/          12 files' },
          { k: 'out', s: 'Other/          38 files' },
          { k: 'ok', s: 'moved 374 files, 38 duplicates set aside' },
        ],
      },
    ],
    answer:
      'Done. Your Downloads folder is sorted into 6 folders by type. I found 38 duplicates and moved them to Downloads/_duplicates so you can review them before deleting.',
    chips: [
      { v: '412', l: 'files sorted' },
      { v: '6', l: 'folders' },
      { v: '38', l: 'duplicates set aside' },
    ],
  },
  {
    id: 'code',
    tab: 'Code',
    hint: 'Fix failing tests',
    client: 'claude',
    device: 'MacBook Pro',
    ps1: 'you@macbook shop-api %',
    prompt: 'The tests in my project are failing. Find out why and fix it.',
    steps: [
      {
        tool: 'start_process',
        arg: 'npm test',
        result: '2 failed',
        term: [
          { k: 'cmd', s: 'npm test' },
          { k: 'out', s: ' PASS  src/cart.test.ts' },
          { k: 'err', s: ' FAIL  src/utils/date.test.ts' },
          { k: 'out', s: '   parseDate keeps the timezone offset' },
          { k: 'dim', s: 'Tests: 2 failed, 46 passed, 48 total' },
        ],
      },
      {
        tool: 'read_file',
        arg: 'src/utils/date.ts',
        result: '42 lines',
        term: [
          { k: 'dim', s: '# read_file src/utils/date.ts' },
          { k: 'out', s: '18  export function parseDate(input: string) {' },
          { k: 'out', s: '19    const d = new Date(input.slice(0, 19));' },
        ],
      },
      {
        tool: 'edit_block',
        arg: 'src/utils/date.ts',
        result: '1 line changed',
        term: [
          { k: 'dim', s: '# edit_block src/utils/date.ts' },
          { k: 'del', s: '-   const d = new Date(input.slice(0, 19));' },
          { k: 'add', s: '+   const d = new Date(input);' },
        ],
      },
      {
        tool: 'start_process',
        arg: 'npm test',
        result: '48 passed',
        term: [
          { k: 'cmd', s: 'npm test' },
          { k: 'ok', s: ' PASS  src/utils/date.test.ts' },
          { k: 'ok', s: 'Tests: 48 passed, 48 total' },
        ],
      },
    ],
    answer:
      'Fixed. parseDate() was cutting off the timezone offset before parsing. I changed one line in src/utils/date.ts and all 48 tests pass now.',
    chips: [
      { v: '1', l: 'line changed' },
      { v: '48', l: 'tests passing' },
      { v: '0', l: 'failing' },
    ],
  },
  {
    id: 'servers',
    tab: 'Servers',
    hint: 'Find why it is slow',
    client: 'chatgpt',
    device: 'vps-fra1',
    ps1: 'deploy@vps-fra1:~$',
    prompt: 'The site feels slow. Check the server and tell me why.',
    steps: [
      {
        tool: 'start_process',
        arg: 'uptime',
        result: 'load 7.82',
        term: [
          { k: 'cmd', s: 'uptime' },
          { k: 'warn', s: ' 14:02:11 up 41 days, load average: 7.82, 7.41, 6.90' },
        ],
      },
      {
        tool: 'start_process',
        arg: 'top processes',
        result: 'worker at 312% CPU',
        term: [
          { k: 'cmd', s: 'ps aux --sort=-%cpu | head -3' },
          { k: 'dim', s: 'USER    %CPU  %MEM  COMMAND' },
          { k: 'err', s: 'deploy   312   9.4  node queue-worker.js' },
          { k: 'out', s: 'www        3   0.6  nginx: worker process' },
        ],
      },
      {
        tool: 'read_file',
        arg: 'worker.log',
        result: 'retry loop since 02:14',
        term: [
          { k: 'dim', s: '# read_file /var/log/app/worker.log' },
          { k: 'out', s: '02:14:07 job 88213 failed, retrying (1)' },
          { k: 'out', s: '02:14:08 job 88213 failed, retrying (2)' },
          { k: 'warn', s: '14:02:09 job 88213 failed, retrying (9412)' },
        ],
      },
    ],
    answer:
      'The queue worker has been retrying one failed job since 02:14 and is using 312% CPU. That is what slows the site down. Do you want me to drop that job and restart the worker?',
    chips: [
      { v: '7.82', l: 'load average' },
      { v: '1', l: 'stuck job' },
      { v: '3', l: 'steps to find it' },
    ],
  },
  {
    id: 'fix',
    tab: 'Troubleshooting',
    hint: 'Free up disk space',
    client: 'claude',
    device: 'Mac mini',
    ps1: 'you@mac-mini ~ %',
    prompt: 'My disk is almost full. What is taking up the space?',
    steps: [
      {
        tool: 'start_process',
        arg: 'df -h',
        result: '94% used',
        term: [
          { k: 'cmd', s: 'df -h /' },
          { k: 'dim', s: 'Filesystem     Size   Used  Avail  Capacity' },
          { k: 'warn', s: '/dev/disk3s1   494G   462G    32G       94%' },
        ],
      },
      {
        tool: 'start_process',
        arg: 'du -sh',
        result: '3 large folders',
        term: [
          { k: 'cmd', s: 'du -sh ~/Library/* ~/projects | sort -h | tail -3' },
          { k: 'out', s: ' 18G   ~/Library/Containers/com.docker.docker' },
          { k: 'out', s: ' 23G   ~/projects  (node_modules in old projects)' },
          { k: 'out', s: ' 41G   ~/Library/Caches' },
        ],
      },
    ],
    answer:
      'Three things take up 82 GB: app caches (41 GB), node_modules folders in old projects (23 GB) and unused Docker data (18 GB). Tell me which ones to clean up and I will do it.',
    chips: [
      { v: '94%', l: 'disk used' },
      { v: '82 GB', l: 'found' },
      { v: '3', l: 'places to clean' },
    ],
  },
];
