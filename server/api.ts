import express from 'express'
import cors from 'cors'

// * IMPORT TRPC SERVER
// npm i @trpc/server
import { initTRPC } from '@trpc/server'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

// * Initialize TRPC
const t = initTRPC.create()

// * Define the router and its procedures (endpoints)
const appRouter = t.router({
  // http://localhost:3000/trpc/sayHi
  sayHi: t.procedure.query(() => {
    return 'Hi from trpc server'
  }),
  // http://localhost:3000/trpc/logToServer
  // http://localhost:3000/trpc/logToServer?input=hello
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === 'string') return v

      throw new Error('Invalid input: expected string')
    })
    .mutation((req) => {
      console.log(`Client said: ${req.input}`)
      return true
    }),
})

const app = express()
app.use(cors({ origin: 'http://localhost:5173' })) // cors for client

// * Add the TRPC middleware to express (express specific)
// http://localhost:3000/trpc
app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(3000, () => console.log('Server started on port 3000'))

// * export types for client
export type AppRouter = typeof appRouter
