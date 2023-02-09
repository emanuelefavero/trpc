import express from 'express'
import cors from 'cors'

// * IMPORT TRPC SERVER
// npm i @trpc/server
import { createExpressMiddleware } from '@trpc/server/adapters/express'

// * IMPORT TRPC ROUTER
import { appRouter } from './routers' // <- ./routers/index.ts

// --------------------------------------------

const app = express()
app.use(cors({ origin: 'http://localhost:5173' })) // cors for client

// * Add the TRPC middleware to express (express specific)
// http://localhost:3000/trpc
app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(3000, () => console.log('Server started on port 3000'))

// * export types for client
export type AppRouter = typeof appRouter
