import {useSelector} from "react-redux"
import {Navigate,useLocation} from "react-router-dom"
const test = false;
const ProtectedRoute = ({children}:any) => {
    const {user} = useSelector((state:any) => state.user);
    let location = useLocation();
    console.log('user',user);
    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
  //   if(!test) {
  //     return <Navigate to="/login" state={{ from: location}} replace />
  // }
 return children

};

export default ProtectedRoute;