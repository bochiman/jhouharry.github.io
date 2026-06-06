export interface NewsItem {
  date: string;
  en: string;
  zh: string;
}

export const news: NewsItem[] = [
  {
    date: '2026.03',
    en: '🚀 Joined <strong class="text-secondary-var">X-Square Robot</strong> as a Research Intern.',
    zh: '🚀 加入 <strong class="text-secondary-var">自变量机器人 (X-Square Robot)</strong> 担任研究实习生。',
  },
  {
    date: '2025',
    en: '🎉 Our paper "CordViP" was accepted by <strong class="text-primary-var">RSS 2025</strong>!',
    zh: '🎉 我们的论文 "CordViP" 被机器人领域顶级会议 <strong class="text-primary-var">RSS 2025</strong> 接收！',
  },
  {
    date: '2025',
    en: '🚀 New preprint released: "See Once, Then Act" on Vision-Language-Action Models.',
    zh: '🚀 发布了关于视觉-语言-动作模型的新预印本论文："See Once, Then Act"。',
  },
];
