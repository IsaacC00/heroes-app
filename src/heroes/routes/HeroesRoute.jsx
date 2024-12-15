import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPages, HeroPage, MarvelPages, SearchPage } from "../pages"

export const HeroesRoute = () => {
    return (
        <>
            <Navbar />
            
            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DCPages />} />
                    <Route path="search" element={<SearchPage />} />
                    {/* //? podemos utilizar el reactRouterDom para 
                    //? tener urls con argumentos pero para eloo debemos de utilizar
                    //? uns custom hook dee RRD mucho ojo debemos de mandar id 
                    //? de la siguietne manera /:(argumento) */}
                    <Route path="hero/:id" element={<HeroPage />} />
                    {/* Search, Heroes by id */}
                    <Route path="/" element={<Navigate to='/marvel' />} />
                </Routes>
            
            </div>
        </>
    )
}
