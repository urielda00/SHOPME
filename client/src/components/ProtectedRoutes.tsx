import {Navigate,useLocation} from "react-router-dom";
import { useAppSelector } from "../app/hooks";


const ProtectedRoute = ({children}:{ children: JSX.Element }) => {

    const isLogged:string|null = window.sessionStorage.getItem('isLogged');
    const {user} = useAppSelector((state) => state.user);
    let location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }else if(isLogged !== 'true'){
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children
};
export default ProtectedRoute;