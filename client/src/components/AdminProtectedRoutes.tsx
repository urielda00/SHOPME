import {useSelector} from "react-redux"
import {Navigate,useLocation} from "react-router-dom"


const AdminProtectedRoutes = ({children}:any) => {
    const {isAdmin} = useSelector((state:any) => state.user);
    const isLogged = window.sessionStorage.getItem('isLogged');
    let location = useLocation();

    if(!isAdmin) {
        return <Navigate to="/" state={{ from: location}} replace />
    }else if(isLogged !== 'true'){
        return <Navigate to="/login" state={{ from: location}} replace />
    }

 return children

};

export default AdminProtectedRoutes;