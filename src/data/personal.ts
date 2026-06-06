import type { ImageMetadata } from 'astro';
import avatar from '../assets/images/avatar.jpg';

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface Personal {
  name: string;
  nameZh: string;
  title: string;
  titleZh: string;
  institution: string;
  institutionZh: string;
  avatar: ImageMetadata;
  scholar: string;
  bio: string;
  bioZh: string;
  links: SocialLink[];
}

export const personal: Personal = {
  name: 'Zichen Zhou',
  nameZh: '周子琛',
  title: 'Senior Undergraduate Student',
  titleZh: '大四本科生',
  institution: 'Beijing Institute of Technology',
  institutionZh: '北京理工大学',
  avatar,
  scholar: 'https://scholar.google.com/citations?user=4ztoqYYAAAAJ&hl=zh-CN',
  bio: 'Hi! I am a senior undergraduate student at Beijing Institute of Technology. My research interests mainly focus on <strong>Embodied AI</strong> and <strong>Robotics</strong>, particularly developing <strong>Vision-Language-Action Models</strong> and <strong>Visuomotor Policies</strong> for dexterous manipulation in real-world scenarios.',
  bioZh: '您好！我是北京理工大学的一名大四本科生。我的主要研究兴趣集中在<strong>具身智能 (Embodied AI)</strong>和<strong>机器人学 (Robotics)</strong>。我致力于开发针对真实世界灵巧操作的<strong>视觉-语言-动作模型</strong>和<strong>视觉运动策略</strong>。',
  links: [
    { icon: 'fas fa-envelope', label: 'Email', href: 'mailto:email@example.com' },
    { icon: 'fas fa-graduation-cap', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=4ztoqYYAAAAJ&hl=zh-CN' },
    { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com' },
  ],
};
