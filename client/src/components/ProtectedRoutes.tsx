// import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
const test = false;
const ProtectedRoute = ({children}:any) => {
    // const user = useSelector((state) => state.user);
    let location = useLocation();

    // if(!user.state.isAuthenticated) {
    //     return <Navigate to="/login" state={{ from: location}} replace />
    // }
    if(!test) {
      return <Navigate to="/login" state={{ from: location}} replace />
  }
 return children

};

export default ProtectedRoute;