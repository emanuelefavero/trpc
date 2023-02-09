import { inferAsyncReturnType, initTRPC } from '@trpc/server'
import { createContext } from './context'

// --------------------------------------------

// * Initialize TRPC
export const t = initTRPC
  // * Pass the context
  .context<inferAsyncReturnType<typeof createContext>>()

  .create()

// NOTE: We do this in a separate file so that we initialize TRPC only once
// ? infer means to figure out the type
