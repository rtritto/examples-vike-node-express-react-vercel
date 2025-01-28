import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import vike from 'vike-node/hono'

const app = new Hono()
app.use(vike())

export const GET = handle(app)

export const POST = handle(app)

export default app
