import { Route, Routes } from "react-router-dom"
import { HeroesRoute } from "../heroes"
import { LoginPages } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      
      <Routes>

        <Route path="login" element={
          <PublicRoute>
            <LoginPages />
          </PublicRoute>
        } />


        //? la proteccion de rutas 
        //? para proteger nuestras rutas 
        //? utilizamos reactrouterdom
        //? debemos de crear un higher componente que 
        //? evalue si estamos logeado y renderize las 
        //? rutas que deseamos acceder 
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoute />
          </PrivateRoute>
        }/>

      </Routes>
    </>
  )
}
