export interface NavItem {
  href: string;
  en: string;
  zh: string;
}

export const nav: NavItem[] = [
  { href: '#about', en: 'About', zh: '关于我' },
  { href: '#publications', en: 'Publications', zh: '论文发表' },
  { href: '#awards', en: 'Awards', zh: '奖项' },
  { href: '#experience', en: 'Experience', zh: '经历' },
];
