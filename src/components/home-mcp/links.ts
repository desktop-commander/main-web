/**
 * Shared destinations for the MCP-first homepage.
 *
 * Primary CTA   = Install        -> #install on the page itself
 * Secondary CTA = Manage devices -> the Remote MCP platform
 */

export const PLATFORM_URL = 'https://mcp.desktopcommander.app/';

export const CHATGPT_CONNECTOR =
  'https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425';

export const CLAUDE_CONNECTOR =
  'https://claude.ai/customize/connectors/directory/remote-desktop-commander';

/** Remote MCP endpoint, for clients that take a server URL directly. */
export const MCP_ENDPOINT = 'https://mcp.desktopcommander.app/mcp';

export const LOCAL_MCP_URL = '/mcp/';

export const GITHUB_URL = 'https://github.com/wonderwhy-er/DesktopCommanderMCP';

export const NPM_URL = 'https://www.npmjs.com/package/@wonderwhy-er/desktop-commander';

/** Social proof, kept in one place so it is updated once. */
export const STATS = {
  weeklyDownloads: '150k+',
  githubStars: '9.6k',
};

/**
 * Directory rankings, shown one at a time in the hero pill (first one is the
 * default and what shows without JS). `label` follows the rank: "#1 in ...".
 */
export const RANKINGS = [
  { platform: 'chatgpt', rank: 1, label: 'in ChatGPT Developer Tools', date: 'Sep 2026', href: CHATGPT_CONNECTOR },
  { platform: 'claude', rank: 3, label: 'in Claude Connectors', date: 'Feb 2026', href: CLAUDE_CONNECTOR },
  { platform: 'chatgpt', rank: 6, label: "on ChatGPT's Popular list", date: 'Sep 2026', href: CHATGPT_CONNECTOR },
] as const;

export type Ranking = (typeof RANKINGS)[number];
