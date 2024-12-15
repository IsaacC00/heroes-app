import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('pruebas en PublicRoute.jsx', () => {

    test('No debe mostrar los childrens si no esta autenticado', () => {
        const initialState = {
            logged: false,
        };
        //? para probar si mi componente renderiza o no debemos de montarlo tal cual 
        //? con el contexto y todo
        render(
            <AuthContext.Provider value={initialState}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        //? hacemos las aserciones necesarios
        expect(screen.getAllByText('Ruta Publica')).toBeTruthy();
    });

    test('debe mostrar los childrens si esta autenticado', () => {
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
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>

        );
        
        expect(screen.getAllByText('Marvel')).toBeTruthy();
    });
});