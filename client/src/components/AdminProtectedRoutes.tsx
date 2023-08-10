import {Navigate,useLocation} from "react-router-dom";
import { useAppSelector} from '../app/hooks';

const AdminProtectedRoutes = ({children}:{ children: JSX.Element }) => {
    const {isAdmin} = useAppSelector((state) => state.user);
    const isLogged:string|null = window.sessionStorage.getItem('isLogged');
    let location = useLocation();

    if(!isAdmin) {
        return <Navigate to="/" state={{ from: location}} replace />
    }else if(isLogged !== 'true'){
        return <Navigate to="/login" state={{ from: location}} replace />
    }

 return children

};

export default AdminProtectedRoutes;