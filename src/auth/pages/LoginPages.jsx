import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPages = () => {

  //?lo que basicamente hacemos aqui es redireccionar al usuario cuenado se logee
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    //?regresar al ultimo path en el cual cerre sesion
    //? si es null entonces vamos al inicio de heroes
    const lastPath = localStorage.getItem('lastPath') || '/' //?seteamos el path en PrivbateRoute


    login('Isaac Calderon');
    navigate(lastPath,{
      replace:true
    })
  }

  return (
    <>
      <div className='container mt-5'>

        <h1>Login Page</h1>
        <hr />
        <button
          className='btn btn-primary'
          onClick={onLogin}
        >
          Login
        </button>

      </div>
    </>
  )
}
