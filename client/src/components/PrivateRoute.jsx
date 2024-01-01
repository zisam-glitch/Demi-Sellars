import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./side-Bar";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser)
    return (
      <div className='flex'>
        <Sidebar />
        <div className='overflow-y-auto w-full'>
          <Outlet />
        </div>
      </div>
    );
  return <Navigate to='/sign-in' />;
}
