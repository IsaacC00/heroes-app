import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mocked = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mocked
})) ;

describe('Pruebas en SearchPage,jsx', () => {

    beforeEach( ()=>jest.clearAllMocks() );

    test('debe de mostar los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

    });

    test('debe de mostar el valor de batman junto con el valor de queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/dc-batman.jpg');

        const alert = screen.getByLabelText('divSearch');
        expect(alert.style.display).toBe('none')

    });

    test('debe mostrar un error si no se encuentra el heroe', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=asdff']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('divSearch');
        expect(alert.style.display).toBe('')

    });

    test('debe llamar el navigate a la pantalla nueva ', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input,{target:{name:'searchText',value:'superman'}})
        
        const form = screen.getByLabelText('formHero');
        fireEvent.submit(form);

        expect(mocked).toHaveBeenCalledWith('?q=superman');
        


     });

});