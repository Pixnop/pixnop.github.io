import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/pixnop.github.io/' : '/'

  return {
    plugins: [react()],
    base: base,
  }
})