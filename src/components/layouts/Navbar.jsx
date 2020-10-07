import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getUserAction, logoutUserAction } from '../../actions/authActions'
import { useDispatch } from 'react-redux';

const Navbar = () => {

    // Get value of Auth reducer
    const auth = useSelector(state => state.auth)
    const { user } = auth

    // useDispatch
    const dispatch = useDispatch()

    // useEffect
    useEffect( () => {
        dispatch(getUserAction())
        // eslint-disable-next-line
    }, [])

    // LogoutUser
    const logoutUser = () => {
        dispatch(logoutUserAction())
    }

    return (
        <header className="app-header">
            {
                user ? (<p className="nombre-usuario">Hola <span>{user.name}</span></p> ) : null
            }         
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={logoutUser}
                >Cerrar Sesión</button>
            </nav>
        </header>
      );
}
 
export default Navbar;