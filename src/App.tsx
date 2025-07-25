import { useSelector } from "react-redux";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { RootState } from "./store/store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const token = useSelector((state: RootState) => state.auth.token);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="userhome" element={token ? <Home /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to={token ? "/userhome" : "/"} replace />} />
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
