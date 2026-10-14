import { type Faq, SETUP_FAQ, COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';

/** FAQs for /use-cases/analyze-data/. Feeds the on-page accordion and the FAQPage JSON-LD. */
export const ANALYZE_DATA_FAQS: Faq[] = [
  {
    question: 'Which file types can it analyze?',
    answer:
      'CSV, Excel and JSON are the most common. It also reads TSV, log files and other text data, and it can write a Python script for formats like Parquet or SQLite. Point it at one file or a whole folder.',
  },
  {
    question: 'How big can the file be?',
    answer:
      'The file does not have to fit in the chat. For large files, ChatGPT or Claude writes a Python script and runs it in your terminal, so every row is processed. The practical limit is what your computer can handle.',
  },
  {
    question: 'Can it make charts?',
    answer:
      'Yes. Ask for a chart and it writes a script that saves it as an image, for example a PNG next to your data. It can also save summary tables as a new Excel or CSV file.',
  },
  SETUP_FAQ,
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
