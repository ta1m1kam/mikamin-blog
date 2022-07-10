import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'mikamin-blog',
  apiKey: process.env.API_KEY!,
})
