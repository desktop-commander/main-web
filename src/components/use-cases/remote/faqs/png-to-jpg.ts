import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const PNG_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert PNG to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all PNG files in my Screenshots folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can I choose the JPG quality?',
    answer:
      'Yes. Say the quality you want in your message, for example 80% for the web or 95% for print. You can also ask it to keep each file under a certain size.',
  },
  {
    question: 'What happens to transparent backgrounds?',
    answer:
      'JPG has no transparency, so transparent areas get a solid background, usually white. Ask for a specific color in your message if you need one, or keep those files as PNG.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
