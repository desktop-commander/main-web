import { type Faq, SETUP_FAQ, COMPUTERS_FAQ, PRICE_FAQ } from '../faqs';

/** FAQs for /use-cases/connect-apps/. Feeds the on-page accordion and the FAQPage JSON-LD. */
export const CONNECT_APPS_FAQS: Faq[] = [
  {
    question: 'Which apps can it connect to?',
    answer:
      'Anything you can reach from the terminal on your computer: services with an API, command line tools like git, gh or the AWS CLI, and your own scripts. There is no fixed list of built-in integrations. ChatGPT or Claude runs the commands on your linked computer and uses the access you already have there.',
  },
  {
    question: 'Do I need API keys?',
    answer:
      'For most web services, yes. Desktop Commander uses the API keys, tokens and CLI logins that are already on your computer, for example in a .env file or a CLI you are signed in to. If something is missing, ask and it tells you what to set up.',
  },
  {
    question: 'Can it change data in my tools?',
    answer:
      'Yes, if the key or login it uses allows changes. For anything that writes or deletes data, ask it to show the commands first and wait for your OK before it runs them.',
  },
  SETUP_FAQ,
  COMPUTERS_FAQ,
  PRICE_FAQ,
];
