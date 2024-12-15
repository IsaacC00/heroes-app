import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('pruebas en AppRouter.jsx', () => {

    test('debe mostrar el login si no esta autenticado', () => {

        const initialState = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={initialState}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login')).toBeTruthy();
    });

    test('debe mostrar Marvel si esta autenticado', () => {

        const initialState = {
            logged: true,
            user:{id:123,name:'isaac'}
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={initialState}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect(screen.getAllByText('Marvel')).toBeTruthy();
    });

});