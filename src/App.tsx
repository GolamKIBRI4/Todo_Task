import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import UserHomeLayout from "./layouts/UserHomeLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="userhome" element={<UserHomeLayout />} >
        <Route index element={<Home />} />
        </Route>
       </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
