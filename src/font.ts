import { Kanit, Montserrat } from 'next/font/google';

export const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '300'],
  variable: '--font-kanit',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
  variable: '--font-montserrat',
});
