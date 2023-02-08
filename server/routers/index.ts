// * IMPORT TRPC INITIALIZER
import { t } from '../trpc'

// * Define the router and its procedures (endpoints)
export const appRouter = t.router({
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
