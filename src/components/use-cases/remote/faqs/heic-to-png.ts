import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const HEIC_TO_PNG_FAQS: Faq[] = [
  {
    question: 'How do I convert HEIC to PNG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all HEIC files in my Downloads folder to PNG." It converts them and tells you where the PNGs are.',
  },
  {
    question: 'Can I convert a whole folder at once?',
    answer:
      'Yes. Name the folder and it converts every HEIC file inside, including subfolders if you ask. You can rename or sort the PNGs in the same message.',
  },
  {
    question: 'Will the PNGs have transparent backgrounds?',
    answer:
      'PNG supports transparency, so if a HEIC file has a transparent background, the PNG keeps it. Regular iPhone photos have no transparent areas, so they convert as normal full images.',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
