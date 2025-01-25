import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import vikeNode from 'vike-node/plugin'

export default {
  cacheDir: '.vite',
  plugins: [react(), vike({ prerender: true }), vikeNode('server/index.ts')]
}
