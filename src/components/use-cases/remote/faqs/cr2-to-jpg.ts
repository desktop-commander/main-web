import { COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';
import type { Faq } from '../faqs';

export const CR2_TO_JPG_FAQS: Faq[] = [
  {
    question: 'How do I convert CR2 to JPG with Desktop Commander?',
    answer:
      'Add Desktop Commander to ChatGPT or Claude and link your computer. Then ask, for example: "Convert all CR2 files in my Canon photos folder to JPG." It converts them and tells you where the JPGs are.',
  },
  {
    question: 'Can I convert a whole photo shoot at once?',
    answer:
      'Yes. Name the folder and it converts every CR2 file inside, including subfolders if you ask. You can rename the JPGs or sort them by date in the same message. Your RAW files stay as they are.',
  },
  {
    question: 'Does it keep the EXIF data?',
    answer:
      'Ask it to keep the metadata and it copies the EXIF data, such as camera settings and the date taken, into each JPG.',
  },
  {
    question: 'Can I choose the JPG size and quality?',
    answer:
      'Yes. Add it to your message, for example: "Convert to full size JPG at 90% quality" or "Make 2048 px wide JPGs for my website."',
  },
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
