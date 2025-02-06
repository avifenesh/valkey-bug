"use server";
import { GlideClient } from "@valkey/valkey-glide";
// When Valkey is in standalone mode, add address of the primary node, and any replicas you'd like to be able to read from.
const addresses = [
	{
		host: "localhost",
		port: 6379,
	},
];
// Check `GlideClientConfiguration/GlideClusterClientConfiguration` for additional options.
const client = await GlideClient.createClient({
	addresses: addresses,
	// if the server uses TLS, you'll need to enable it. Otherwise, the connection attempt will time out silently.
	// useTLS: true,
	clientName: "nextjs",
});

export const getValkey = async (): Promise<
	ReturnType<typeof GlideClient.createClient>
> => {
	return client;
};
