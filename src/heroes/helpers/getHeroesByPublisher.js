import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    
    const validPublisher = ['Marvel Comics','DC Comics'];

    //? si el publisher no se encuentra en nuestro arreglo 
    //? lanza un nuevo error 
    if( !validPublisher.includes(publisher) ){
        throw new Error(`${publisher} no es un valido para la busqueda`)
    }
    //? retonar los heroes con el publisher que se desea
    return heroes.filter( hero => hero.publisher === publisher );

}
