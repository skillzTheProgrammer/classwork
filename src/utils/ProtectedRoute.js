import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

function ProtectedRoute({path,component}){

    const [Auth,setAuth] = useContext(AuthContext)
    return(
       Auth.isAuthenticated? <Route path={path} component={component} />:
                                <Redirect to='/login' />
    )
}

export default ProtectedRoute