import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import DashboardNav from "../../views/dashboard/navigation/index.jsx";

export function checkTokenValidity(token) {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp >= currentTime;
  } catch (error) {
    return false;
  }
}

export function getUserRole() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.userRoles || [];
}

const IsAuthorized = ({ children }) => {
  const token = localStorage.getItem('token');
  const validToken = checkTokenValidity(token);
  const role = getUserRole();
  console.log(role);

  if (!validToken) {
    return <Navigate to="/login" />;
  } else if (role.includes("Merchant")) {
    return <DashboardNav />;
  }
   else if (role.includes("Customer")) {
    return <Navigate to="/dashboard/customer" />;
  } else if (role.includes("Admin")) {
    return <Navigate to="/dashboard/admin" />;
  } 
  else {
    return <Navigate to="/unauthorized" />;
  }
 
};

export default IsAuthorized;
