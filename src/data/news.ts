export interface NewsItem {
  date: string;
  en: string;
  zh: string;
}

export const news: NewsItem[] = [
  {
    date: '2026.06',
    en: '🏆 Won <strong class="text-primary-var">1st Place</strong> at the <a href="https://callmeray.github.io/Mani_ViTac_Challenge_2026_page/index.html#leaderboard" target="_blank" class="text-secondary-var hover:underline">ManiSkill-ViTac Challenge 2026</a> at the CVPR 2026 Embodied AI Workshop!',
    zh: '🏆 在 CVPR 2026 Embodied AI Workshop 的 <a href="https://callmeray.github.io/Mani_ViTac_Challenge_2026_page/index.html#leaderboard" target="_blank" class="text-secondary-var hover:underline">ManiSkill-ViTac Challenge 2026</a> 中获得 <strong class="text-primary-var">冠军</strong>！',
  },
  {
    date: '2025',
    en: '🚀 New preprint released: "See Once, Then Act" on Vision-Language-Action Models.',
    zh: '🚀 发布了关于视觉-语言-动作模型的新预印本论文："See Once, Then Act"。',
  },
  {
    date: '2025',
    en: '🎉 Our paper "CordViP" was accepted by <strong class="text-primary-var">RSS 2025</strong>!',
    zh: '🎉 我们的论文 "CordViP" 被机器人领域顶级会议 <strong class="text-primary-var">RSS 2025</strong> 接收！',
  },
];
