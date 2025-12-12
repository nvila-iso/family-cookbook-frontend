import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import FamilyPage from "./pages/FamilyPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Setup from "./pages/user/profile/Setup";
import Settings from "./pages/user/profile/settings/Settings";
import CreateRecipe from "./pages/user/profile/CreateRecipe";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "browse", Component: Browse },
      { path: "/family/:slug", Component: FamilyPage },

      // PROTECTED PAGES
      {
        path: "/setup",
        element: (
          <ProtectedRoute>
            <Setup />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <CreateRecipe />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
