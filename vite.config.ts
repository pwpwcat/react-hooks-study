import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // 💡 すべてのSassファイルで共通スタイルを読み込み = 各Sassファイルで@useを使う必要がなくなる
        additionalData: `@use "@/assets/stylesheets" as *\n`
      }
    }
  }
})