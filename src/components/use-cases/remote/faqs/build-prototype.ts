import { type Faq, SETUP_FAQ, COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';

/** FAQs for /use-cases/build-prototype/. Feeds the on-page accordion and the FAQPage JSON-LD. */
export const BUILD_PROTOTYPE_FAQS: Faq[] = [
  {
    question: 'Which languages and frameworks does it work with?',
    answer:
      'Anything you can run on your computer: HTML, CSS and JavaScript, React, Next.js, Vite, Python, Node.js and more. If the project needs a tool that is not installed yet, ChatGPT or Claude can install it in your terminal.',
  },
  {
    question: 'Does it run the dev server?',
    answer:
      'Yes. It installs dependencies, starts the dev server in your terminal, reads the errors and fixes them. Open the address it gives you, for example localhost:3000, in a browser on your computer to see the app.',
  },
  {
    question: 'Can I keep editing in my own editor?',
    answer:
      'Yes. The project is a normal folder on your computer, so you can open it in VS Code, Cursor or any other editor and switch between editing by hand and asking in the chat. Git works the same way.',
  },
  SETUP_FAQ,
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
