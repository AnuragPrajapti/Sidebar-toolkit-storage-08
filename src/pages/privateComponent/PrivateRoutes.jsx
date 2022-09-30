import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({ isLogged }) => {
    
    const isLoggedIn = JSON.parse(localStorage.getItem('signIn'))
     
    if(!isLoggedIn){
        return <Navigate to='/login' replace />;
    }
    return isLogged
}

export default PrivateRoutes;