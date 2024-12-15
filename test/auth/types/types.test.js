import { types } from "../../../src/auth/types/types";

describe('pruebas en types.js', () => { 
    
    test('los types debe no deben cambiar', () => { 
        expect(types).toEqual({
            Login:'[Auth] Login',
            Logout :'[Auth] Logout',
        });
     });

 });