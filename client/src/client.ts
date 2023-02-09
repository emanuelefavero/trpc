// * IMPORT TRPC CLIENT
// npm i @trpc/client
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
// * IMPORT TYPES we created in server/api.ts
import { AppRouter } from '../../server/api'

// --------------------------------------------

// * Create a client
const client = createTRPCProxyClient<AppRouter>({
  // httpBatchLink batches multiple requests into one - useful for performance
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

// * Make requests to the server
async function main() {
  // http://localhost:3000/trpc/sayHi
  const result = await client.sayHi.query()
  console.log(result)

  const result2 = await client.users.get.query({ userId: '123 ' })
  console.log(result2)

  const result3 = await client.users.update.mutate({
    userId: '123',
    name: 'Jack',
  })
  console.log(result3)

  // http://localhost:3000/trpc/logToServer
  await client.logToServer.mutate('hello from client') // check server console
}

main()
