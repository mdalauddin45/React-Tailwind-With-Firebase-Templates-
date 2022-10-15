import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";
import Main from "./components/layout/Main";
import LogIn from "./components/Log in/LogIn";
import Registration from "./components/Registration/Registration";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/registration", element: <Registration></Registration> },
        { path: "/login", element: <LogIn></LogIn> },
        { path: "/about", element: <About></About> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
