import { defineNitroPlugin } from "nitropack/runtime";
import { onServerStart } from "../server/bootstrap";

export default defineNitroPlugin((nitroApp) => {
	onServerStart({ env: "nitro", nitroApp });
});
