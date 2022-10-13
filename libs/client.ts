import { createClient } from "microcms-js-sdk"

export interface MicroCMSClient {
  serviceDomain: string;
  apiKey: string | undefined;
}

export const client = createClient({
  serviceDomain: "hariken-blog",
  apiKey: process.env.API_KEY,
});