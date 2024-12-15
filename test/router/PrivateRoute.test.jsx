import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";

import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('pruebas en PrivateRoute.jsx', () => {

    test('debe mostrar el childreen si esta aunteticado ', () => {

        Storage.prototype.setItem=jest.fn();

        const initialState = {
            logged: true,
            user: {
                name: 'Isaac',
                id: 123
            }
        };
        //? para probar si mi componente renderiza o no debemos de montarlo tal cual 
        //? con el contexto y todo
        render(
            <AuthContext.Provider value={initialState}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>


        );
        expect(screen.getAllByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith( "lastPath", "/marvel");
    });

});