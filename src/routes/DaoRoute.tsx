import { Route } from "@tanstack/router";
import Dao from "../pages/Dao";
import { rootRoute } from "./RootRoute";

export const BudgetsRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/dao/:id",
	component: Dao,
});
