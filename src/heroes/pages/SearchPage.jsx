import { useLocation, useNavigate } from 'react-router-dom';
import queryString  from 'query-string';
import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {
 
  
  const navigate = useNavigate();
  //? utilizamos locacion para
  //? recuperar el query de nuestra url
  const location = useLocation();
  
  //? pero debemos instalar query-string  
  //? para poder obtener el valor exacto
  const {q = ''} = queryString.parse(location.search);
  
  
  //?buscamos el heroe
  const heroes = getHeroesByName(q);
  
  const { searchText, onInputChange, } = useForm({
    searchText:q,
  });

  //?condiciones para mostrar compoenentes
  const showSearch = (q.length === 0);
  const showError = (q.length > 0 )&& heroes.length === 0;
  
  //? utilizamos nuestro cuustom hook de formulario
  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    // if (searchText.trim().length <= 1 ) return;
    //? pasamos como argumento el texto que estamos buscando
    //? del formiulario para encontrar el heroe
    navigate( `?q=${searchText}` );
    
  }

  return (
    <>
      <div className="row">

        <h1>Busqueda</h1>
        <hr />

        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form aria-label='formHero' onSubmit={ onSearchSubmit } action="">
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
            <h4>Results</h4>
            <hr />
            
            <div className='alert alert-primary animate__animated animate__fadeIn'
            style={ {display : ` ${showSearch? '' : 'none'} ` } }
            >
              Search a Hero
            </div>
            
            <div  aria-label='divSearch'className='alert alert-danger animate__animated animate__fadeIn'
            style={ {display : `${showError? '' : 'none'}` } }
            >
              No hero with <b>{q}</b>
            </div>
              {/*//? utilizamos un .map por que devolvemos un arreglo de nuestra funcion getHeroesByName */}
              { heroes.map( hero => (
              
              <HeroCard key={hero.id} {...hero} />

                ))
              } 
        </div>
      </div>
    </>
  )
}
