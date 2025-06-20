import { Outlet, useLocation, Navigate } from "react-router-dom";
// import { auth } from "./firebase";

const PrivateRoutesLayout = ({ auth }) => {
  const location = useLocation();

  console.log(auth.email);

  return auth.email ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
