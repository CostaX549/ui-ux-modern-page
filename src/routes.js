import React from "react";
import { Routes as Rotas, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";


import Login from "./pages/Login";

const Routes = () => {
  
   return(
  
    <Rotas>
      <Route >
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
    
      </Route>
    </Rotas>

   )
}

export default Routes;