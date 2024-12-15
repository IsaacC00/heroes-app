import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
      //?evaluamos si esta logeado o no
    //? y dependiendo de eso 
    //? lo redireccionamos a otro lugar o renderizamos los child
    const { logged } = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to='/marvel' />
}
