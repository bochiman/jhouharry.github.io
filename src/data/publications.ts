import type { ImageMetadata } from 'astro';
import cordvip from '../assets/images/publications/cordvip.png';
import seeOnceThenAct from '../assets/images/publications/see-once-then-act.png';
import glue from '../assets/images/publications/glue.png';

export interface PubLink {
  icon: string;
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  titleHref?: string;
  authors: string;
  venueEn: string;
  venueZh: string;
  image?: ImageMetadata;
  abstractEn?: string;
  abstractZh?: string;
  links: PubLink[];
}

export const publications: Publication[] = [
  {
    title: 'CordViP: Correspondence-based Visuomotor Policy for Dexterous Manipulation in Real-World',
    titleHref: '#',
    authors: 'Y Fu, Q Feng, N Chen, <strong>Zichen Zhou</strong>, M Liu, M Wu, T Chen, S Rong, J Liu',
    venueEn: 'Robotics: Science and Systems (<span class="font-bold text-secondary-var">RSS</span>), 2025.',
    venueZh: 'Robotics: Science and Systems (<span class="font-bold text-secondary-var">RSS</span>), 2025.',
    image: cordvip,
    abstractEn: 'We propose CordViP, a novel correspondence-based visuomotor policy that significantly improves the robustness and generalization of dexterous manipulation in real-world scenarios.',
    abstractZh: '我们提出了 CordViP，一种新颖的基于对应关系的视觉运动策略，显著提高了真实场景下灵巧操作的鲁棒性和泛化能力。',
    links: [
      { icon: 'fas fa-file-pdf text-red-500', label: 'PDF', href: '#' },
      { icon: 'fas fa-link text-secondary-var', label: 'Project', href: '#' },
    ],
  },
  {
    title: 'See Once, Then Act: Vision-Language-Action Model with Task Learning from One-Shot Video Demonstrations',
    titleHref: '#',
    authors: 'G Chen, M Wang, Q Shao, <strong>Zichen Zhou</strong>, W Mao, T Cui, M Zhu, Y Deng, L Yang',
    venueEn: 'arXiv preprint arXiv:2512.07582, 2025.',
    venueZh: 'arXiv preprint arXiv:2512.07582, 2025.',
    image: seeOnceThenAct,
    abstractEn: 'This paper introduces a Vision-Language-Action (VLA) model capable of learning new tasks from just one-shot video demonstrations, greatly reducing the data requirements for robotic imitation learning.',
    abstractZh: '本文介绍了一种视觉-语言-动作 (VLA) 模型，该模型能够仅从单次视频演示中学习新任务，极大地降低了机器人模仿学习的数据需求。',
    links: [
      { icon: 'fas fa-file-pdf text-red-500', label: 'arXiv', href: 'https://arxiv.org/abs/2512.07582' },
    ],
  },
  {
    title: 'GLUE: Global-Local Unified Encoding for Imitation Learning via Key-Patch Tracking',
    authors: 'Includes <strong>Zichen Zhou</strong>',
    venueEn: 'In Preparation / Under Review',
    venueZh: '在投 / 审稿中',
    image: glue,
    links: [],
  },
];
