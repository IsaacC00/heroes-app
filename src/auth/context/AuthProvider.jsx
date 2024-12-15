import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
//? provveer toda la informacion a mi aplicacion

export const AuthProvider = ({children}) => {

  //? para poder tener almacenado nuestros logeo utilizaremos 
  
  //?localstorage y la 3era funcion de reducer init
  const init = () => {
    //? utilizamos JSON para almacenar nuestro usuario del localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    //? retornamos el estado del logeo y usuario 
    return {
      //?si esta almaceno si caso contrario no
      logged:!!user,
      user: user
    }
  }

    //? recordemos para utilizar el reducer debemos 
    //? de mandar como argumentos nuestro reducer y el estado inicial
    const [authState, dispatch] = useReducer(authReducer, {}, init)
    //? deestrucutramos el state y el dispatch

    //? para tener cierta restriccion a la infomracion de mi AuthContext
    //?voya cerar una fucnoin que maneje el auth d mi app

    const login = (name = '') => {
      
      const user = { id:'ABC', name }
      
      const action = {
        type: types.Login,
        payload: user
      }
      
      //?seteamos nuestro usuario 
      localStorage.setItem('user',JSON.stringify(user))

      dispatch(action);
    }

    //?cerrar sesion y limpiamos el usuario

    const logout = () => {
      localStorage.removeItem('user');

      //? tarea: limpiar el usuario una vez cierre sesion
      const action = {
        type: types.Logout, 
      }
      dispatch(action)
    }

  return (
    //? la infrmacion que queremos compartir aqui
    <AuthContext.Provider value={{ ...authState, login, logout  }}>
     {children}   
    </AuthContext.Provider>
  )
}
