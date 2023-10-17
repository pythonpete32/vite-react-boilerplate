import { Router } from "@tanstack/router";
import { IndexRoute } from "./IndexRoute";
import { rootRoute } from "./RootRoute";
import { SettingsRoute } from "./SettingsRoute";
import { BudgetsRoute } from "./DaoRoute";

const routeTree = rootRoute.addChildren([IndexRoute, SettingsRoute, BudgetsRoute]);
const router = new Router({ routeTree });

declare module "@tanstack/router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

export { router };
