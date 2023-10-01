import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const navigate = useNavigate();
    const authorization = localStorage.getItem('user');

    useEffect(()=>{
        if(!authorization){
        navigate('/signin')
        }

    },[navigate, authorization])

    return (
         children 
    )
}

export default ProtectedRoutes