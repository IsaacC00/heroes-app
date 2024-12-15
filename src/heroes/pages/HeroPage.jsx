import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByid } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();

  //?memorizar el componenete para no ocupar 
  //? bastante recursos en memoria 
  //? cada que el id cambie para que no lo redibuje otra vez 
  //? ojo recordamos el callback
  const hero = useMemo(() => getHeroByid(id), [id]);
  
  //? en caso de no encontrar el heroe 
  //? debemos de redireccionar al usuario 
  //? a otrra pantalla 
  if (!hero) {
    return <Navigate to='/search' />;
  }
  
  //? regresar hacia atras
  //?regresar para aptra utilizando el navigate
  const navigate = useNavigate()
  const onNavigateBack = () => {
    //? regresar un paso anterior
    navigate(-1)
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      
      <div className=" col-4">
        <img src={`/assets/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance</b> {hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p className="">{hero.characters}</p>
        <button 
          onClick={onNavigateBack}
        className="btn btn-outline-primary"
        >
          Regresar
        </button>
      </div>

    </div>

  )
}
