import React,{useContext, useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

function ProtectedRoute({path,component}){

    const [Auth,setAuth] = useState(AuthContext)
    useEffect(()=>{
        const getAuth = JSON.parse(sessionStorage.getItem('Auth'))
        setAuth(getAuth)
    },[])
    console.log("Getting Auth",Auth)
    // return(
        if(Auth.auth){
            // console.log("Getting Auth",Auth)
            return <Route path={path} component={component} />
        }else{
            return <Redirect to='/login' />
        }
    //    Auth.auth? <Route path={path} component={component} />:
    //                             <Redirect to='/login' />
    // )
}

export default ProtectedRoute;