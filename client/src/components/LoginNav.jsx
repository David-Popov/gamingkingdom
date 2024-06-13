import React from 'react'
import eneba_logo from "../assets/eneba_logo.png";
import { useNavigate } from 'react-router-dom';

const LoginNav = () => {
    let navigate = useNavigate();

  return (
    <div className="bg-secondary md:bg-primary h-[10vh]">
        <div><img src={eneba_logo} alt="Eneba" className="p-5 cursor-pointer" onClick={() => navigate('/')}/></div>
    </div>
  )
}

export default LoginNav
