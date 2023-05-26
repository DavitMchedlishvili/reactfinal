import { useDispatch, useSelector } from "react-redux";
import {
  authetnicateUser as authUser,
  logout as logoutUser,
} from "../redux/slices";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
  };

  const authenticateUser = (data) => {
    dispatch(authUser(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return {
    userData,
    authenticateUser,
    logout,
  };
};
