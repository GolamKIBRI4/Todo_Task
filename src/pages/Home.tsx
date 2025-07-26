import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import Todos from "../components/Todos";
import HomePageLayout from "../components/HomePageLayout";


const Home = () => {
    const navigate= useNavigate();
    const dispatch =useDispatch(); 
    const token = useSelector((state: RootState) => state.auth.token);
    if(!token) {
        navigate("/");
    }

  return (
    <HomePageLayout>
        <Todos />
      <button onClick={() => dispatch(logout())} className="logout-button" >Logout</button>
    </HomePageLayout>
  );
};

export default Home;
