import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mocked = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mocked
})) ;

describe('pruebas en NavBar', () => {

    const initialState = {
        logged: false,
        user: {
            name: 'Isaac',
        },
        logout:jest.fn()
    };

    test('debe de mostrar el nombre del usuario', () => {
 

        render(
            <AuthContext.Provider value={initialState}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect( screen.getByText('Isaac') ).toBeTruthy();

    });


    test('debe de llmar el logout y navigate cuando se hace click en logout', () => {

        render(
            <AuthContext.Provider value={initialState}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logButton = screen.getByRole('button');
        fireEvent.click(logButton);

        expect(initialState.logout).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledWith('/login',{'replace':true});
        

    });

});