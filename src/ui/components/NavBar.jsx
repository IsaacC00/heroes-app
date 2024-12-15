import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    //?manejar un customHook para cerrar sesion
    //? useNavigate: tiene propiedades que nos permite 
    //? manejar las rutas de nuestra aplicacion a nuestro antojo
    //? por el momento solo veremos replace y push
    const navigate = useNavigate();

    //?replace: evite que la persona pueda regresar a la
    //?pestania anterior, como si de cerrar sesion se tratase

    //? manejar el logout de nuestra aplicacion 
    const onLogout = () => {
        logout();
        navigate('/login',{
            replace:true
        });
        
    }

    //?utilizamos nuestro contexto para acceder al nombre del usuario
    const { user, logout } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) =>  `nav-item nav-link ${isActive ? 'active': '' }  `} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) =>  `nav-item nav-link ${isActive ? 'active': '' }  ` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) =>  `nav-item nav-link ${isActive ? 'active': '' }  ` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span
                        className='nav-item nav-link text-primary'
                        >
                         { user?.name }
                    </span>
                    <button
                     className='nav-item nav-link btn'
                     onClick={onLogout}
                     >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
