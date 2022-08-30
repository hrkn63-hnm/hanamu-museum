import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "hariken-blog",
  apiKey: process.env.API_KEY,
});
