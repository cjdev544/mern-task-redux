import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../../actions/authActions'

const PrivateRoute = ({ component: Component, ...props }) => {

    // Get value of Auth redux
    const auth = useSelector(state => state.auth)
    const { authenticated, loading } = auth

    // useDispatch
    const dispatch = useDispatch()

    // useeffect
    useEffect( () => {
        dispatch(getUserAction())
        // eslint-disable-next-line
    }, [])

    return ( 
        <Route {...props} render={ props => !authenticated && !loading
            ? ( <Redirect to={'/'} /> )
            : ( <Component {...props} /> )
        } />
     );
}
 
export default PrivateRoute;