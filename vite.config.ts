import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import vikeNode from 'vike-node/plugin'

export default {
  cacheDir: '.vite',
  plugins: [react(), vike({ prerender: true }), vikeNode(process.env.NODE_ENV === 'production' ? 'server/index.ts' : 'server/entry.node.ts')]
}
