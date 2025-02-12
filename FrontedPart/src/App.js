import "./App.css";
import SignUp from "./components/SingUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import AddToDoList from "./components/AddToDoList/AddToDoList";
import AllToDoList from "./components/AllToDoList/AllToDoList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/singup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddToDoList />,
    },
    {
      path: "/all",
      element: <AllToDoList />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
