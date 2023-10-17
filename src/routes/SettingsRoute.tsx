import { Route } from "@tanstack/router";
import Settings from "../pages/Settings";
import { rootRoute } from "./RootRoute";

export const SettingsRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/settings",
	component: Settings,
});
