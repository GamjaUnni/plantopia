import {Outlet} from "react-router-dom";


const Wrapper = () => {
    return (
        <>
            <div>
                Toast
            </div>

          <Outlet />
        </>
    );
};

export default Wrapper;
