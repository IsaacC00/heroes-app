import { types } from "../types/types";
//? recordar que el reducer debe ser una funcion sencilla
//? y no debe llamar ninguna funcion de externos o consultar a apis

//? mi stado inicial es que el usuario no esta logeado
const initialState = {
    logged: false,
}

//? mi reducer que va a retornar el estado inicial
//? y mi accion

export const authReducer = (state = initialState, action) => {
    //? el switch evalua el tipo de accion que envio al reducer
    switch (action.type) {

        //? aqui evaluo los types que he creado
        //? en caso de que mi usuario inicie sesion 
        //? recibimos un nombre y cambiamos el estado 
        //? a true
        case types.Login:
            return {
                //? algo que es importante aclarar es que si 
                //? queremos seguir teniendo cierta infomracion 
                //? lo que debemos hacer es deestructurar el state 
                ...state,
                logged: true,
                user: action.payload
            }
            break;
        //? cambioamos el estado a false y 
        //? almacenamos null en el nombre
        case types.Logout:
            return {
                ...state,
                logged: false,
                user: null
            }
            break;


        default:
            return state;
    }
}
