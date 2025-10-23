import { defineNitroPlugin } from "nitro/runtime";
export default defineNitroPlugin((nitroApp) => {
	console.log("Any Server Startup Code here: ", nitroApp);
});
