/**
 * FAQs for the use-case pages, written for Remote MCP (ChatGPT and Claude).
 * The same arrays feed the on-page accordion (ClientFAQ) and the FAQPage
 * JSON-LD in the page's <Layout jsonLd>, so the two never drift apart.
 *
 * Shared entries (SETUP_FAQ, COMPUTERS_FAQ, ONLINE_FAQ, PRICE_FAQ) are exported for the
 * per-page files in ./faqs/ and for the ChatGPT ad pages (adPages.ts). Plan facts mirror the
 * homepage pricing section (astro-src/data/home.ts) and /pricing/
 * (src/components/pricing/RemoteMcpPricing.tsx). Update them together.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqJsonLd = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const SETUP_FAQ: Faq = {
  question: 'Do I need to download an app?',
  answer:
    'There is a short one time setup. Add Desktop Commander to ChatGPT or Claude, sign in, and link the computer you want to work with at mcp.desktopcommander.app. After that you just ask in the chat you already use.',
};

export const COMPUTERS_FAQ: Faq = {
  question: 'Does it work on Mac and Windows?',
  answer:
    'Yes. Desktop Commander works on Mac and Windows. You can link more than one computer to your account and work with whichever one is online.',
};

export const ONLINE_FAQ: Faq = {
  question: 'Does my computer need to be on?',
  answer:
    'Yes. ChatGPT or Claude reaches your computer live, so it has to be on and online while you work. You can ask from any browser or from your phone.',
};

export const PRICE_FAQ: Faq = {
  question: 'Is it free?',
  answer:
    'Desktop Commander has a free plan with 10,000 tool calls a month. Pro is $20 a month plus VAT applicable in your country, with unlimited tool calls. You also need a ChatGPT or Claude account, and plugin availability depends on your plan there.',
};

export const FILE_MANAGEMENT_FAQS: Faq[] = [
  SETUP_FAQ,
  {
    question: 'Can it delete or overwrite my files?',
    answer:
      'It does what you ask, so be clear about what should happen. For a bigger cleanup, ask it to show the plan first and wait for your OK before it moves anything.',
  },
  COMPUTERS_FAQ,
  ONLINE_FAQ,
  PRICE_FAQ,
];

export const HEIC_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert HEIC to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all HEIC files in my Photos folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can I start a conversion from my phone?',
    answer:
      'Yes. Ask in the ChatGPT or Claude app on your phone. Your computer needs to be on and linked to your account.',
  },
  {
    question: 'Can I convert a whole folder at once?',
    answer:
      'Yes. Name the folder and it converts every HEIC file inside, including subfolders if you ask. You can rename or sort the JPGs in the same message.',
  },
  {
    question: 'Does it keep my original HEIC files?',
    answer:
      'Yes, unless you ask otherwise. Say so in your message if you want the originals moved or deleted after the conversion.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
