import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const PDF_TO_PNG_FAQS: Faq[] = [
  {
    question: 'How do I convert PDF to PNG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert every page of report.pdf in my Documents folder to PNG." It converts them and tells you where the files are.',
  },
  {
    question: 'Can I convert only some pages?',
    answer:
      'Yes. Name the pages or a range in your message, for example "pages 2, 5 and 10" or "pages 4 to 8". Each page becomes its own PNG file.',
  },
  {
    question: 'Can I choose the image resolution?',
    answer:
      'Yes. Ask for a DPI, for example 150 for the screen or 300 for print. You can also ask for a set width in pixels.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
