import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const TIFF_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert TIFF to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all TIFF files in my Scans folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can it handle multi-page TIFF files?',
    answer:
      'Yes. Ask it to save each page as a separate JPG. It numbers the pages so every document stays in order.',
  },
  {
    question: 'Can I make the JPGs small enough to email?',
    answer:
      'Yes. Add it to your message, for example: "Convert my scans to JPG and keep each one under 1 MB." The original TIFF files stay as they are unless you ask otherwise.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
