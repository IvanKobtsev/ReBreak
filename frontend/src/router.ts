import { createRouter } from "@solidjs/router";
import { lazy } from "solid-js";

export const Router = createRouter({
  routes: [
    {
      path: "/",
      component: lazy(() => import("@/pages/Dashboard/DashboardPage.tsx")),
    },
  ],
});

export const { paths } = Router;
