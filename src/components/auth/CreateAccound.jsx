import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserAction, getUserAction } from '../../actions/authActions'
import { showAlertAction } from '../../actions/alertAction'
import { useDispatch, useSelector } from 'react-redux'

const CreateAccound = props => {

    // Form state
    const [ newuser, setNewUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })
    const { name, email, password, confirm } = newuser

    // useDispatch
    const dispatch = useDispatch()

    // Get value of Alert state and Auth state
    const alert = useSelector(state => state.alert.alert)
    const auth = useSelector(state => state.auth)
    const { message, authenticated } = auth

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
        setNewUser({
            ...newuser,
            [e.target.name]: e.target.value
        })
    }

    // onSubmit Form
    const onSubmitForm = e => {
        e.preventDefault()

        // Form validation
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            dispatch(showAlertAction('Todos los campos son obligaorios', 'alerta-error' ))
            return
        }
        if(password.length < 6) {
            dispatch(showAlertAction('El password debe de tener al menos 6 caracteres', 'alerta-error'
            ))
            return
        }
        if(password.trim() !== confirm.trim()) {
            dispatch(showAlertAction('Los passwords no coinsiden', 'alerta-error'))
            return
        }

        // Send user to Auth action 
        dispatch(createUserAction({
            name,
            email,
            password,
        }))        
    }

    return (  
        <div className="form-usuario">
            {
                alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form 
                    onSubmit={onSubmitForm}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChangeForm}
                        />
                    </div>

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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirm"
                            placeholder="Repite tu Password"
                            value={confirm}
                            onChange={onChangeForm}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <p>¿Ya tienes cuenta?</p>                 
                <Link to={"/"} className="enlace-cuenta">
                    Ir a login
                </Link>
                   
                
            </div>
        </div>
    );
}
 
export default CreateAccound;