import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('pruebas en authReducer', () => { 
    
    const user = {
        id:'ABC',
        name:'Isaac'
    };

    const initialState = {
        logged:false,
        user: user
    };
    


    test('debe retornar el estado por defecto', () => { 
        const state = authReducer(initialState,{})
        expect(state).toBe(initialState)
     });
    test('llamar al login y setear el usuario', () => {

        const action = {
            type: types.Login,
            payload: user
        }

        const login = authReducer(initialState,action);

        expect(login).toEqual({
            logged: true,
            user: action.payload
        });
        
        
     });
    test('llamar al logout y borrar el usuario', () => { 
        
        const action = {
            type: types.Logout
        };
        
        const logout = authReducer(initialState,action)
        
        expect(logout).toEqual({logged: false,
            user: null})
     });
 });