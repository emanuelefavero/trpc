import { initTRPC } from '@trpc/server'

// --------------------------------------------

// * Initialize TRPC
export const t = initTRPC.create()

// NOTE: We do this in a separate file so that we initialize TRPC only once
