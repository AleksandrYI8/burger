import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(255, 171, 8, 1)', // добавлен цвет в формате RGBA
        foreground: 'var(--foreground)',
      },
      screens: {
        xs: '320px', // добавление кастомного брейкпоинта для 320px
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            overflow: 'auto', // Оставляем возможность прокрутки
            scrollbarWidth: 'none', // Отключение скроллбара в Firefox
            msOverflowStyle: 'none', // Отключение скроллбара в IE и Edge
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            display: 'none', // Отключение скроллбара в Chrome, Safari и Edge
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};

export default config;
