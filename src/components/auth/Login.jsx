import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction, loginUserAction } from '../../actions/authActions'
import { showAlertAction } from '../../actions/alertAction'
import { Link } from 'react-router-dom'

const Login = props => {

    // Form state
    const [ login, setLogin ] = useState({
        email: '',
        password: ''
    })
    const { email, password } = login

    // useDispatch
    const dispatch = useDispatch()

    // Get values of Auth and Alert reducer
    const alert = useSelector(state => state.alert.alert)
    const auth = useSelector(state => state.auth)
    const { authenticated, message} = auth

    // useEffect
    useEffect( () => {
        if(authenticated) {
            dispatch(getUserAction())
            props.history.push('/proyectos')
        }
        if(message) {
            dispatch(showAlertAction(message.msg, message.category))
        }
        // eslint-disable-next-line
    }, [authenticated, message, props.history])

    // onChange Form
    const onChangeForm = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    // onSubmit Form
    const onSubmitForm = e => {
        e.preventDefault()

        // Form validation
        if(email.trim() === '' || password.trim() === '') {
            dispatch(showAlertAction('Ambos campos son obligatorios', 'alerta-error'))
            return
        }

        // Login User
        dispatch(loginUserAction({
            email,
            password
        }))
    }


    return (
        <div className="form-usuario">
            {
                alert ? (<p className={`alerta ${alert.category}`}>{alert.msg}</p>) :null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmitForm}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChangeForm}                            
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChangeForm} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <p>¿No tienes cuenta?</p> 
                <Link to={'/crear-cuenta'} className="enlace-cuenta">
                    crear cuenta
                </Link>
            </div>
        </div>
      );
}
 
export default Login;