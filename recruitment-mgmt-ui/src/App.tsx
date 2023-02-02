/* eslint-disable */
import React from "react";
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import { HashRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import MiniDrawer from "./components/Navbar/drawer.component";
import Dashboard from "./pages/Dashboard/dashboard.component";
import LoginComp from "./components/LoginComp/LoginComp";
// import keycloak from "./Auth/keycloak";
// import LoginComp from "./components/LoginComp/LoginComp";





const App: React.FunctionComponent = () => {
  
  const { keycloak, initialized } = useKeycloak();
  console.log(keycloak);
  return (<>
  
    
      
      <MiniDrawer />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
  
    
    
    </>
  );
}
;

export default App;
