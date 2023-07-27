import {useSelector} from "react-redux"
import {Navigate,useLocation} from "react-router-dom"
const test = false;
const ProtectedRoute = ({children}:any) => {
    const isLogged = window.sessionStorage.getItem('isLogged');
    const {user} = useSelector((state:any) => state.user);
    let location = useLocation();
    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }else if(isLogged !== 'true'){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
  //   if(!test) {
  //     return <Navigate to="/login" state={{ from: location}} replace />
  // }
 return children

};

export default ProtectedRoute;