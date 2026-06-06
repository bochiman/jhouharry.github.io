/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // 纯正 iOS/macOS 风格字体栈：英文 SF Pro + 中文 苹方 (PingFang SC)
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        serif: ['"Fira Code"', 'monospace'],
      },
      colors: {
        // 将颜色映射到 CSS 变量，以支持多主题切换
        'bg-main': 'var(--color-bg)',
        'card-var': 'var(--color-card)',
        'primary-var': 'var(--color-primary)',
        'secondary-var': 'var(--color-secondary)',
        'main-var': 'var(--color-text-main)',
        'muted-var': 'var(--color-text-muted)',
        var: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
