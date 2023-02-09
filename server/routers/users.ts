import { t } from '../trpc'

// --------------------------------------------

// * Create a router
export const userRouter = t.router({
  // http://localhost:3000/trpc/users/getUsers
  getUsers: t.procedure.query(() => {
    return { id: 1, name: 'John' }
  }),
})

// NOTE: Make sure to import this router in server/routers/index.ts
