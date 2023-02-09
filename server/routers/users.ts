import { t } from '../trpc'
import { z } from 'zod'

// --------------------------------------------

// * Define procedures for this router
// the input type should be an object with a string called id (it uses zod for type checking)
const userProcedure = t.procedure.input(z.object({ userId: z.string() }))

// * Create a router and assign procedures to routes
export const userRouter = t.router({
  // http://localhost:3000/trpc/users/get
  get: userProcedure.query(({ input }) => {
    return { id: input.userId }
  }),
})

// NOTE: Make sure to import this router in server/routers/index.ts
