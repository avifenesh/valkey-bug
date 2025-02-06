import { GlideClient } from "@valkey/valkey-glide";

const addresses = [
  {
    host: "valkey",
    port: 6379,
  },
];

const client = await GlideClient.createClient({
  addresses: addresses,
  clientName: "nextjs",
});

export default client;