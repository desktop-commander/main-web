import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const AVIF_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert AVIF to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all AVIF files in my Downloads folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can I choose the JPG quality or file size?',
    answer:
      'Yes. Add it to your message, for example: "Convert to JPG at 85% quality" or "Keep each JPG under 500 KB." Your original AVIF files stay as they are unless you ask otherwise.',
  },
  {
    question: 'Can it convert AVIF to PNG instead?',
    answer:
      'Yes. Ask for PNG instead of JPG. PNG keeps transparent backgrounds, which JPG can\'t, so it is the better pick for logos and graphics.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
