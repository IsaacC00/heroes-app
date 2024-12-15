import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    //?evaluamos si esta logeado o no
    //? y dependiendo de eso 
    //? lo redireccionamos a otro lugar o renderizamos los child
    const { logged } = useContext(AuthContext);

    //? memorizar la ultima ruta a la cual ingrese
    const {pathname,search} = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath' , lastPath); //? recuperamos el path en LoginPage

    
    return (logged)
        ? children
        : <Navigate to='/login' />
}
