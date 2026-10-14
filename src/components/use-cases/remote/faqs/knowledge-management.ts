import { type Faq, SETUP_FAQ, COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';

/** FAQs for /use-cases/knowledge-management/. Feeds the on-page accordion and the FAQPage JSON-LD. */
export const KNOWLEDGE_MANAGEMENT_FAQS: Faq[] = [
  {
    question: 'Does it work with Obsidian?',
    answer:
      'Yes. An Obsidian vault is a folder of markdown files, so ChatGPT or Claude can read, create and edit notes in it, and add links and tags as it writes. Obsidian shows the changes like any other edit.',
  },
  {
    question: 'How does it find the right notes?',
    answer:
      'Tell it which folder to use. It searches file names and note contents in that folder, then reads the notes that match. For a large vault, naming a subfolder makes it faster.',
  },
  {
    question: 'Can it commit my notes to Git?',
    answer:
      'Yes. If your notes are in a Git repo, ask it to commit and push the changes. It runs git in your terminal, the same way you would.',
  },
  SETUP_FAQ,
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
