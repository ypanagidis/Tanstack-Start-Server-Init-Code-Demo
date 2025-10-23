import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import { onServerStart } from './src/server/bootstrap'

// Dev-only plugin to mirror Nitro startup behavior in Vite dev
const devStartup = {
  name: 'dev-startup-once',
  apply: 'serve' as const,
  configureServer() {
    onServerStart({ env: 'vite-dev' })
  },
}

const config = defineConfig({
  plugins: [
    devStartup,
    nitroV2Plugin({
      preset: "node-server",
      plugins: ["./src/nitro-plugins/demo.ts"],
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
