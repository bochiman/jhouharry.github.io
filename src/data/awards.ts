import type { ImageMetadata } from 'astro';
import vitacCertificate from '../assets/images/awards/vitac-2026-certificate.jpg';

export interface Award {
  date: string;
  titleEn: string;
  titleZh: string;
  descEn: string;
  descZh: string;
  href?: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export const awards: Award[] = [
  {
    date: '2026.06',
    titleEn: '🏆 1st Place — ManiSkill-ViTac Challenge 2026',
    titleZh: '🏆 冠军 — ManiSkill-ViTac Challenge 2026',
    descEn:
      'Won 1st Place at the <a href="https://callmeray.github.io/Mani_ViTac_Challenge_2026_page/index.html#leaderboard" target="_blank" class="text-secondary-var hover:underline">ManiSkill-ViTac Challenge 2026</a> at the CVPR 2026 Embodied AI Workshop. Team: BIT IN²Bot.',
    descZh:
      '在 CVPR 2026 Embodied AI Workshop 的 <a href="https://callmeray.github.io/Mani_ViTac_Challenge_2026_page/index.html#leaderboard" target="_blank" class="text-secondary-var hover:underline">ManiSkill-ViTac Challenge 2026</a> 中获得冠军。队伍：BIT IN²Bot。',
    image: vitacCertificate,
    imageAlt: 'ManiSkill-ViTac Challenge 2026 1st Prize Certificate — BIT IN²Bot',
  },
];
