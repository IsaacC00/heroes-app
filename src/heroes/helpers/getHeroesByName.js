import { heroes } from '../data/heroes';

//? si no recivo nada entonces obtengo unacadena vacia
export const getHeroesByName = ( name = '' ) => {
    
    //? alamaceno mi nombre tranformado
    name = name.toLocaleLowerCase().trim();
    
    //? regreso un arreglo vacio si el usuario no escribio nada
    if(name.length === 0) return [];

    //? regreso el superheroe que tenga(incluya) el nombre nombre
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )
}
