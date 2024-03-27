import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./common/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/travelaja-landing-page/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
