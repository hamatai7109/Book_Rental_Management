import "./App.css";
import Test from "./Routes/Test";
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
    {
      path: "/test",
      element: <Test></Test>,
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
