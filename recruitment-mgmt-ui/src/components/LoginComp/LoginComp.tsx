/* eslint-disable */
// import { useKeycloak } from '@react-keycloak/web';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react'

const LoginComp = () => {
    const { keycloak, initialized } = useKeycloak();
    console.log("data",keycloak);
     console.log("check",keycloak.authenticated);
    return (<>
    {!!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.login()}
        >
          Logout
        </button>
      )}

      {!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.logout()}
        >
          Logout 
        </button>
      )}
      </>
  )
}

export default LoginComp