import {Outlet} from "react-router-dom";
import Toast from "@components/atoms/Toast/Toast.tsx";


const Wrapper = () => {
  return (
    <>
      <Toast />
      <Outlet />
    </>
  );
};

export default Wrapper;
