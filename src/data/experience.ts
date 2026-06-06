import type { ImageMetadata } from 'astro';
import bit from '../assets/images/logos/bit.png';
import xSquare from '../assets/images/logos/x-square.png';

export interface Experience {
  org: string;
  orgZh: string;
  logo: ImageMetadata;
  accent: 'primary' | 'secondary';
  periodEn: string;
  periodZh: string;
  roleEn: string;
  roleZh: string;
  descEn: string;
  descZh: string;
}

export const experience: Experience[] = [
  {
    org: 'X-Square Robot',
    orgZh: '自变量机器人 (X-Square Robot)',
    logo: xSquare,
    accent: 'secondary',
    periodEn: 'Mar 2026 - Present',
    periodZh: '2026.03 - 至今',
    roleEn: 'Research Intern',
    roleZh: '研究实习生',
    descEn: 'Focusing on Embodied AI and developing advanced visuomotor policies for robotic manipulation.',
    descZh: '致力于具身智能方向的研究，开发用于机器人灵巧操作的先进视觉运动策略。',
  },
  {
    org: 'Beijing Institute of Technology',
    orgZh: '北京理工大学',
    logo: bit,
    accent: 'primary',
    periodEn: 'Sep 2022 - Jun 2026',
    periodZh: '2022.09 - 2026.06',
    roleEn: 'Bachelor of Engineering',
    roleZh: '工学学士',
    descEn: 'Senior student. Engaged in cutting-edge research in robotics and AI during undergraduate studies.',
    descZh: '大四本科在读。在本科期间积极参与机器人与人工智能领域的前沿研究。',
  },
];
