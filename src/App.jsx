import "./App.css";
import { Signin } from "./Routes/Signin";
import { Signup } from "./Routes/Signup";
import { Home } from "./Routes/Home";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Routes/Protected";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/signin",
      element: <Signin></Signin>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
  ]);
  return (
    <>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
