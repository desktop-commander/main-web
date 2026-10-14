/**
 * ChatGPT Ads landing pages, Oct 2026 test: two campaigns, three ad groups each.
 *
 *   Code      /mcp/chatgpt/codebase/            campaign dc_code_validation_v1
 *             /mcp/chatgpt/codebase/pytest/     ad group C1
 *             /mcp/chatgpt/codebase/typescript/ ad group C2
 *             /mcp/chatgpt/codebase/git/        ad group C3
 *   Machines  /mcp/chatgpt/machines/            campaign dc_machine_operations_v1
 *             /mcp/chatgpt/machines/docker/     ad group M1
 *             /mcp/chatgpt/machines/operations/ ad group M2
 *             /mcp/chatgpt/machines/logs/       ad group M3
 *
 * Each variant is its own static page, so ad review crawlers see the matching
 * content without running JS. The general page also redirects ?use_case=<key>
 * to the variant page, keeping the query string.
 *
 * Copy rules: no "no setup", "no SSH" or guaranteed green tests, and no claim
 * that the work stays on the user's computer. Demos are illustrative and are
 * labelled as examples; set `video` on a variant when a real recording exists.
 * The CTA opens the plugin in ChatGPT; install steps are shown after sign up.
 */
import type { Faq } from "@/components/use-cases/remote/faqs";
import { PRICE_FAQ, ONLINE_FAQ } from "@/components/use-cases/remote/faqs";

export type AdPageKey = "code" | "machines";

export type VisualKind =
  | "code-general"
  | "pytest"
  | "typescript"
  | "git"
  | "docker"
  | "operations"
  | "logs";

export type Tone = "error" | "ok" | "add" | "del" | "muted";
export interface DemoLine {
  text: string;
  tone?: Tone;
}
/** One step of an example session: a command, a file read or edit, or a message. */
export type DemoStep =
  | { kind: "run"; command: string; lines?: DemoLine[] }
  | { kind: "read"; file: string }
  | { kind: "edit"; file: string; lines: DemoLine[] }
  | { kind: "say"; text: string }
  | { kind: "you"; text: string };

export interface AdVariant {
  /** "" for the general campaign page, otherwise the URL segment and use_case value. */
  key: string;
  seo: { title: string; description: string };
  headline: { text: string; accent: string };
  sub: string;
  visual: VisualKind;
  /** Workflow keys, the advertised one first. */
  workflowOrder: string[];
  demo: { prompt: string; steps: DemoStep[]; video?: string };
  firstPrompt: string;
}

export interface AdPage {
  key: AdPageKey;
  path: string;
  /** Sent as `campaign` with every event on the page. */
  campaign: string;
  button: string;
  /** Under the hero button, followed by a "How setup works" link. */
  note: string;
  workflows: Record<string, { title: string; body: string; prompt: string }>;
  /** Step 2 of the two-step setup; step 1 is adding the plugin in ChatGPT. */
  connectStep: { title: string; body: string };
  /** Note under the first prompt card. */
  firstPromptNote: string;
  /** Small line under the setup button. */
  setupFootnote: string;
  finalHeading: string;
  quote: { text: string; who: string; context: string };
  faqs: Faq[];
  variants: AdVariant[];
}

/** Same CTA as the earlier ChatGPT pages: it opens the plugin in ChatGPT. Setup steps follow after sign up. */
const BUTTON = "Install in ChatGPT";

/* ------------------------------------------------------------------ Code */

const pytestDemo: AdVariant["demo"] = {
  prompt: "Run pytest in ~/code/shop-api, explain the failure, then fix it and rerun the tests.",
  steps: [
    {
      kind: "run",
      command: "pytest -q",
      lines: [
        { text: "FAILED tests/test_cart.py::test_discount_rounding", tone: "error" },
        { text: "1 failed, 22 passed in 3.41s", tone: "error" },
      ],
    },
    { kind: "read", file: "tests/test_cart.py, cart/pricing.py" },
    { kind: "say", text: "The discount is rounded before tax is added, so the total is off by a cent. I'll round once, after tax." },
    {
      kind: "edit",
      file: "cart/pricing.py",
      lines: [
        { text: "- total = round(subtotal * (1 - discount), 2) * (1 + tax)", tone: "del" },
        { text: "+ total = round(subtotal * (1 - discount) * (1 + tax), 2)", tone: "add" },
      ],
    },
    { kind: "run", command: "pytest -q", lines: [{ text: "23 passed in 3.38s", tone: "ok" }] },
  ],
};

const CODE: AdPage = {
  key: "code",
  path: "/mcp/chatgpt/codebase/",
  campaign: "code_validation",
  button: BUTTON,
  note: "Needs the Desktop Commander plugin in ChatGPT and a one-time connection to the computer with your repo. Setup takes about 3 minutes.",
  workflows: {
    tests: {
      title: "Run your tests",
      body: "ChatGPT runs the test suite your repo already has, reads the failures, edits the code, and reruns the tests.",
      prompt: "Run the tests and explain any failures before changing anything.",
    },
    checks: {
      title: "Type and lint checks",
      body: "It runs tsc, ESLint and the other checks your project uses, applies fixes across files, and runs the checks again.",
      prompt: "Run the type and lint checks and fix what they report.",
    },
    git: {
      title: "Work on a Git branch",
      body: "It checks the current branch and working tree, switches to the branch you name, makes the change, and shows you the diff so you can review it before committing.",
      prompt: "Check my branch and working tree, then switch to feature/checkout and show me the diff after the change.",
    },
  },
  connectStep: {
    title: "Connect your computer",
    body: "After you sign in, follow the steps shown to connect the computer with your repo. ChatGPT then uses the files and development tools already there.",
  },
  firstPromptNote: "Paste it into ChatGPT once your computer is connected. Replace [path] with the folder of your repo.",
  setupFootnote: "Works on Windows, macOS and Linux. Disconnect any time.",
  finalHeading: "Run your repo's checks from ChatGPT",
  quote: {
    text: "I was a copy/paste machine. Not ideal! So after that, ChatGPT suggested your tool.",
    who: "Desktop Commander Pro user, October 2026 survey",
    context: "Another paying user gets a large TypeScript project ready for production this way: git worktrees, tests, ESLint and runtime checks.",
  },
  faqs: [
    {
      question: "Does ChatGPT see my code?",
      answer:
        "It sees what it reads. File contents and command output that ChatGPT reads are sent to ChatGPT, the same as anything you paste into a chat. Desktop Commander's service stores each call only temporarily to route it.",
    },
    {
      question: "Will it commit or push without asking?",
      answer:
        "It does what you ask. Ask it to show you the diff and wait for your OK before it commits or pushes.",
    },
    {
      question: "Which tools does it use?",
      answer:
        "The ones installed on that computer: your test runner, package scripts, linters, compilers and Git.",
    },
    ONLINE_FAQ,
    PRICE_FAQ,
  ],
  variants: [
    {
      key: "",
      seo: {
        title: "Work on Your Repo from ChatGPT | Desktop Commander",
        description:
          "Connect the computer with your repository. ChatGPT runs your tests and checks, edits files, and shows you the diff.",
      },
      headline: { text: "Work on your actual repo from ChatGPT", accent: "your actual repo" },
      sub: "Connect the computer with your repository. ChatGPT runs your tests and checks, edits files, and shows you the diff.",
      visual: "code-general",
      workflowOrder: ["tests", "checks", "git"],
      demo: pytestDemo,
      firstPrompt:
        "Use Desktop Commander to inspect my repo at [path]. Check the working tree, run the tests, and explain any failures before making changes.",
    },
    {
      key: "pytest",
      seo: {
        title: "Run pytest on Your Repo from ChatGPT | Desktop Commander",
        description: "Let ChatGPT read test failures, edit your files, and rerun pytest in your repo.",
      },
      headline: { text: "Run pytest on your repo from ChatGPT", accent: "pytest" },
      sub: "Let ChatGPT read test failures, edit your files, and rerun pytest in your repo.",
      visual: "pytest",
      workflowOrder: ["tests", "checks", "git"],
      demo: pytestDemo,
      firstPrompt:
        "Use Desktop Commander to inspect my repo at [path]. Check the working tree, run pytest, and explain any failures before making changes.",
    },
    {
      key: "typescript",
      seo: {
        title: "Run TypeScript and ESLint Checks from ChatGPT | Desktop Commander",
        description: "Connect your repo so ChatGPT can run tsc and ESLint, apply fixes, and check the results.",
      },
      headline: { text: "Run TypeScript and ESLint checks from ChatGPT", accent: "TypeScript and ESLint" },
      sub: "Connect your repo so ChatGPT can run tsc and ESLint, apply fixes, and check the results.",
      visual: "typescript",
      workflowOrder: ["checks", "tests", "git"],
      demo: {
        prompt: "Run the type and lint checks in ~/code/dashboard and fix what they report.",
        steps: [
          {
            kind: "run",
            command: "npx tsc --noEmit",
            lines: [
              { text: "src/api/user.ts(14,7): error TS2322: Type 'string | undefined'", tone: "error" },
              { text: "is not assignable to type 'string'.", tone: "error" },
            ],
          },
          {
            kind: "run",
            command: "npx eslint .",
            lines: [{ text: "src/App.tsx  3:10  error  'useEffect' is defined but never used", tone: "error" }],
          },
          {
            kind: "edit",
            file: "src/api/user.ts, src/App.tsx",
            lines: [
              { text: '- const name: string = user.name', tone: "del" },
              { text: '+ const name = user.name ?? ""', tone: "add" },
              { text: '- import { useEffect, useState } from "react"', tone: "del" },
              { text: '+ import { useState } from "react"', tone: "add" },
            ],
          },
          {
            kind: "run",
            command: "npx tsc --noEmit && npx eslint .",
            lines: [
              { text: "tsc ✓  no errors", tone: "ok" },
              { text: "ESLint ✓  no problems", tone: "ok" },
            ],
          },
        ],
      },
      firstPrompt:
        "Use Desktop Commander to open my repo at [path]. Run the project's TypeScript and ESLint checks and list the errors before fixing anything.",
    },
    {
      key: "git",
      seo: {
        title: "Work on the Right Git Branch from ChatGPT | Desktop Commander",
        description: "Let ChatGPT inspect your repo, switch branches, run tests, and show you the diff.",
      },
      headline: { text: "Work on the right Git branch from ChatGPT", accent: "the right Git branch" },
      sub: "Let ChatGPT inspect your repo, switch branches, run tests, and show you the diff.",
      visual: "git",
      workflowOrder: ["git", "tests", "checks"],
      demo: {
        prompt:
          'In ~/code/storefront, check my branch, switch to feature/checkout-copy, change the checkout button to "Place order", run the tests and show me the diff.',
        steps: [
          {
            kind: "run",
            command: "git status -sb",
            lines: [
              { text: "## main...origin/main", tone: "muted" },
              { text: "nothing to commit, working tree clean", tone: "muted" },
            ],
          },
          {
            kind: "run",
            command: "git switch feature/checkout-copy",
            lines: [{ text: "Switched to branch 'feature/checkout-copy'", tone: "ok" }],
          },
          {
            kind: "edit",
            file: "src/Checkout.tsx",
            lines: [
              { text: "- <Button>Buy now</Button>", tone: "del" },
              { text: "+ <Button>Place order</Button>", tone: "add" },
            ],
          },
          { kind: "run", command: "npm test", lines: [{ text: "Tests: 12 passed, 12 total", tone: "ok" }] },
          { kind: "say", text: "That's the diff above. Nothing is committed yet. Tell me if you want me to commit it." },
        ],
      },
      firstPrompt:
        "Use Desktop Commander to open my repo at [path]. Show me the current branch, uncommitted changes and recent commits before we change anything.",
    },
  ],
};

/* -------------------------------------------------------------- Machines */

const dockerDemo: AdVariant["demo"] = {
  prompt: "On homelab, add Uptime Kuma to my compose stack in ~/stacks/monitoring and start it.",
  steps: [
    { kind: "read", file: "~/stacks/monitoring/docker-compose.yml" },
    {
      kind: "edit",
      file: "docker-compose.yml",
      lines: [
        { text: "+  uptime-kuma:", tone: "add" },
        { text: "+    image: louislam/uptime-kuma:1", tone: "add" },
        { text: '+    ports: ["3001:3001"]', tone: "add" },
        { text: '+    volumes: ["./uptime-kuma:/app/data"]', tone: "add" },
        { text: "+    restart: unless-stopped", tone: "add" },
      ],
    },
    {
      kind: "run",
      command: "docker compose up -d uptime-kuma",
      lines: [{ text: "Container monitoring-uptime-kuma-1  Started", tone: "ok" }],
    },
    {
      kind: "run",
      command: "docker compose ps uptime-kuma",
      lines: [{ text: "monitoring-uptime-kuma-1   running   0.0.0.0:3001->3001/tcp", tone: "ok" }],
    },
    { kind: "say", text: "Uptime Kuma is running on port 3001." },
  ],
};

const MACHINES: AdPage = {
  key: "machines",
  path: "/mcp/chatgpt/machines/",
  campaign: "machine_operations",
  button: BUTTON,
  note: "Needs the Desktop Commander plugin in ChatGPT and a one-time connection to the machine you want to reach. Start with one machine and add more when needed.",
  workflows: {
    services: {
      title: "Configure services",
      body: "Edit Docker Compose files, add a service, start it, and check that it is running.",
      prompt: "Add Uptime Kuma to my compose stack and start it.",
    },
    operate: {
      title: "Operate the machine",
      body: "Check processes and service status, read logs, edit config files, and restart services.",
      prompt: "Check if nginx is running and reload it after the config change.",
    },
    investigate: {
      title: "Investigate failures",
      body: "Read the logs on the affected machine, inspect the related config, and check whether a change fixed the error.",
      prompt: "The backup job failed last night. Check its logs and tell me why.",
    },
  },
  connectStep: {
    title: "Connect a machine",
    body: "After you sign in, follow the steps shown to connect the machine you want ChatGPT to reach. Start with one. You can add more machines later, each with its own connection.",
  },
  firstPromptNote: "Paste it into ChatGPT once the machine is connected. Replace the parts in brackets with your own.",
  setupFootnote: "Works on Linux, macOS and Windows. Disconnect any time.",
  finalHeading: "Run your machines from ChatGPT",
  quote: {
    text: "It's just a lot easier having ChatGPT remote into my homelabs and have it configure everything for me",
    who: "Desktop Commander Pro user, October 2026 survey",
    context: "Paying users run Docker stacks, Proxmox hosts, NAS boxes and VPS servers this way.",
  },
  faqs: [
    {
      question: "How do I connect a server?",
      answer:
        "Add Desktop Commander in ChatGPT and sign in. You then see the steps to connect a machine: you run one command on the server and approve it. A server without a browser can be approved from any other device.",
    },
    {
      question: "Do I need to install it on every machine?",
      answer:
        "Yes. Each machine is connected and approved once. Start with one machine and add more when you need them. Both plans let you connect as many machines as you need.",
    },
    {
      question: "What permissions does ChatGPT get?",
      answer:
        "The same as the user that started Desktop Commander on that machine. If that user can't run docker or restart a service, ChatGPT can't either. Commands that need sudo work only if that user is allowed to use sudo.",
    },
    {
      question: "Does ChatGPT see my logs and configs?",
      answer:
        "It sees what it reads. File contents and command output that ChatGPT reads are sent to ChatGPT, the same as anything you paste into a chat. Desktop Commander's service stores each call only temporarily to route it.",
    },
    PRICE_FAQ,
  ],
  variants: [
    {
      key: "",
      seo: {
        title: "Work on Your Server or Homelab from ChatGPT | Desktop Commander",
        description:
          "Connect a server, NAS or homelab box. ChatGPT reads logs, edits configs, and checks services on the machines you connect.",
      },
      headline: { text: "Work on your server or homelab from ChatGPT", accent: "server or homelab" },
      sub: "Connect a server, NAS or homelab box. ChatGPT reads logs, edits configs, and checks services on the machines you connect.",
      visual: "operations",
      workflowOrder: ["services", "operate", "investigate"],
      demo: dockerDemo,
      firstPrompt:
        "Use Desktop Commander on [machine name]. Show me which services are running and anything that looks unhealthy. Don't change anything yet.",
    },
    {
      key: "docker",
      seo: {
        title: "Manage Docker Compose from ChatGPT | Desktop Commander",
        description:
          "Connect the machine running your stack. Ask ChatGPT to edit your compose file, start services, and check their status.",
      },
      headline: { text: "Manage Docker Compose from ChatGPT", accent: "Docker Compose" },
      sub: "Connect the machine running your stack. Ask ChatGPT to edit your compose file, start services, and check their status.",
      visual: "docker",
      workflowOrder: ["services", "operate", "investigate"],
      demo: dockerDemo,
      firstPrompt:
        "Use Desktop Commander on [machine name]. Find my Docker Compose stack, list the services and their status, and don't change anything yet.",
    },
    {
      key: "operations",
      seo: {
        title: "Operate Your Machines from ChatGPT | Desktop Commander",
        description: "Check processes, read logs, edit configs, and restart services on the machines you connect.",
      },
      headline: { text: "Operate your machines from ChatGPT", accent: "your machines" },
      sub: "Check processes, read logs, edit configs, and restart services on the machines you connect.",
      visual: "operations",
      workflowOrder: ["operate", "services", "investigate"],
      demo: {
        prompt: "On web-01, check nginx, raise client_max_body_size to 50m, test the config and reload it.",
        steps: [
          {
            kind: "run",
            command: "systemctl status nginx --no-pager",
            lines: [{ text: "Active: active (running)", tone: "muted" }],
          },
          {
            kind: "edit",
            file: "/etc/nginx/nginx.conf",
            lines: [
              { text: "- client_max_body_size 10m;", tone: "del" },
              { text: "+ client_max_body_size 50m;", tone: "add" },
            ],
          },
          {
            kind: "run",
            command: "sudo nginx -t",
            lines: [{ text: "nginx: configuration file /etc/nginx/nginx.conf test is successful", tone: "ok" }],
          },
          {
            kind: "run",
            command: "sudo systemctl reload nginx && systemctl is-active nginx",
            lines: [{ text: "active", tone: "ok" }],
          },
          { kind: "say", text: "nginx is running with the new limit. Uploads up to 50 MB will go through now." },
        ],
      },
      firstPrompt:
        "Use Desktop Commander on [machine name]. Check disk space, memory and the status of my main services, and report anything that needs attention.",
    },
    {
      key: "logs",
      seo: {
        title: "Debug Your Machine's Logs from ChatGPT | Desktop Commander",
        description:
          "Let ChatGPT inspect the actual log files, investigate failures, and check whether a change resolved the issue.",
      },
      headline: { text: "Debug your machine's logs from ChatGPT", accent: "logs" },
      sub: "Let ChatGPT inspect the actual log files, investigate failures, and check whether a change resolved the issue.",
      visual: "logs",
      workflowOrder: ["investigate", "operate", "services"],
      demo: {
        prompt: "The photos app on nas-01 keeps restarting. Read its logs in ~/stacks/photos and tell me why before changing anything.",
        steps: [
          {
            kind: "run",
            command: "docker compose logs --tail 20 app",
            lines: [
              { text: "app-1  | Error: getaddrinfo ENOTFOUND postgres", tone: "error" },
              { text: "app-1  |     at GetAddrInfoReqWrap.onlookup (node:dns:107:26)", tone: "muted" },
            ],
          },
          { kind: "read", file: "~/stacks/photos/.env, docker-compose.yml" },
          {
            kind: "say",
            text: "The app looks for a database host called postgres, but the database service in docker-compose.yml is named db. Should I change DB_HOST in .env and restart the app?",
          },
          { kind: "you", text: "Yes, go ahead." },
          {
            kind: "edit",
            file: ".env",
            lines: [
              { text: "- DB_HOST=postgres", tone: "del" },
              { text: "+ DB_HOST=db", tone: "add" },
            ],
          },
          {
            kind: "run",
            command: "docker compose up -d app && sleep 30 && docker compose ps app",
            lines: [
              { text: "Container photos-app-1  Started", tone: "ok" },
              { text: "photos-app-1   Up 30 seconds", tone: "ok" },
            ],
          },
          { kind: "say", text: "The app reaches the database now and has stayed up." },
        ],
      },
      firstPrompt:
        "Use Desktop Commander on [machine name]. Read the recent logs for [service], find the first error, and explain it before changing anything.",
    },
  ],
};

export const AD_PAGES: Record<AdPageKey, AdPage> = { code: CODE, machines: MACHINES };

export const getAdVariant = (page: AdPageKey, key = "") => {
  const p = AD_PAGES[page];
  const v = p.variants.find((x) => x.key === key);
  if (!v) throw new Error(`Unknown ${page} variant: ${key}`);
  return { page: p, variant: v };
};

/** use_case value sent with events: the variant key, or "general". */
export const useCaseOf = (variant: AdVariant) => variant.key || "general";
