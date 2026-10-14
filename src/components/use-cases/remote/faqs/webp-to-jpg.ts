import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const WEBP_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert WebP to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all WebP files in my Downloads folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can I convert a whole folder at once?',
    answer:
      'Yes. Name the folder and it converts every WebP file inside, including subfolders if you ask. You can rename or sort the JPGs in the same message.',
  },
  {
    question: 'Can I convert WebP to PNG instead?',
    answer:
      'Yes. Ask for PNG instead of JPG. PNG keeps transparent backgrounds and JPG does not, so PNG is the better choice for logos and graphics.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
