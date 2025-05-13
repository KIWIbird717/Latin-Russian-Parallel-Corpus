import { Charis_SIL, Inter } from "next/font/google";

export const charisSIL = Charis_SIL({
  variable: '--font-charis-sil',
  subsets: ['cyrillic', 'latin'],
  weight: ['700', '400']
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin', 'greek'],
  weight: ['700', '600', '500', '400'],
  style: ['italic', 'normal']
})