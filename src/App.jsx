import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Browse from "./pages/Browse";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "browse", Component: Browse },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
