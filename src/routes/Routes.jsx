import { createBrowserRouter } from "react-router";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Apps from "./../pages/Apps";
import Installation from "./../pages/Installation";
import Details from "../components/main/trendingApps/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, //Home page
        Component: Home,
        loader: async () => {
          const res = await fetch("/data.json");
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "apps",
        Component: Apps,
        loader: async () => {
          const res = await fetch("/data.json");
          if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "installation",
        Component: Installation,
      },

      {
        path: "app-details/:appId",
        Component: Details,
      },
    ],
  },
]);
