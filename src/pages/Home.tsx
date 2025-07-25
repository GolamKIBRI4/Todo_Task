import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Home = () => {
    const navigate= useNavigate();
    const dispatch =useDispatch(); 
    const token = useSelector((state: RootState) => state.auth.token);
    if(!token) {
        navigate("/");
    }

  return (
    <PageLayout>

      <button onClick={() => dispatch(logout())} className="login-form-button">Logout</button>
    </PageLayout>
  );
};

export default Home;
