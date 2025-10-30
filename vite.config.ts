import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',          // pages 폴더 위치
      extensions: ['tsx', 'ts'],  // TSX 파일 자동 라우트
    }),
  ],

  base: '/react/',

  css: {
    devSourcemap: true, // ✅ 개발 환경에서 SCSS sourcemap 활성화
    preprocessorOptions: {
      scss: {
        // 전역 SCSS 변수를 자동 import 하고 싶다면 여기에 추가
        // additionalData: `@import "src/styles/_variables.scss";`
      },
    },
  },

  build: {
    sourcemap: true, // ✅ 빌드 결과물에도 sourcemap 포함 (선택사항)
  },

  server: {
    port: 3000,
  },
})
