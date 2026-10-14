import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const JFIF_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert JFIF to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all JFIF files in my Downloads folder to JPG." It converts them and tells you where the files are.',
  },
  {
    question: 'Does converting JFIF to JPG lower the quality?',
    answer:
      'No. A .jfif file is already a JPEG image, so in most cases it only needs the .jpg extension. The picture stays exactly the same. If you want to keep the .jfif files too, say so and it makes copies instead of renaming.',
  },
  {
    question: 'Why do I keep getting JFIF files?',
    answer:
      'Some browsers on Windows save JPEG images with the .jfif extension, often when you save a picture from a website. Whenever new ones pile up, ask Desktop Commander to fix every .jfif file in the folder at once.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
