/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      xxs: '320px',
      xs: '576px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    extend: {
      colors: {
        // Фон хедера (шапки)
        'header-bg': '#26243A',
        // Текст в хедере
        'header-text': '#FFFFFF',

        // Основная «акцентная» кнопка
        'accent-btn': '#FBBF24',
        'accent-btn-hover': '#F59E0B',
        'accent-btn-edit': '#FF9500',
        'accent-btn-edit-hover': '#FF9500',
        'accent-btn-delete': '#FF0000',
        'accent-btn-delete-hover': '#BE123C',
        'accent-btn-acceptance': '#40FF00',
        'accent-btn-acceptance-hover': '#00FF00',
        'accent-btn-download': '#208100',
        'accent-btn-download-hover': '#00FF00',

        // Общий фон страницы
        'page-bg': '#F3F4F6',

        // Базовый текст
        'default-text': '#333333',

        // Для таблиц (заголовок/ячеек)
        'table-header-bg': '#D1D5DB',    // можно использовать gray-300
        'table-row-bg': '#FFFFFF',
        'table-row-hover': '#F9FAFB',   // при наведении
        'table-border': '#E5E7EB',      // например, для рамок
      },

      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
