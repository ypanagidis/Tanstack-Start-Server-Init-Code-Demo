export type StartupContext = {
	env: "nitro" | "vite-dev";
	nitroApp?: unknown;
};

export function onServerStart(ctx?: StartupContext) {
	// Place any one-time server startup logic here.
	// In Nitro, `ctx.nitroApp` is provided; in Vite dev, only `env` is set.
	// Keep the log message consistent with the demo plugin.
	console.log("Any Server Startup Code here: ", ctx?.nitroApp ?? ctx);
}
