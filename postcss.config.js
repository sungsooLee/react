import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // 꼭 tailwindcss()로 호출
    autoprefixer(),
  ],
};
