/* eslint-disable */
import Keycloak from "keycloak-js";

//import {KeycloakClient} from "@react-keycloak/keycloak-ts"
const keycloakConfig = {
   url: 'http://localhost:8080/', 
   realm: 'MyRealm', 
   clientId: 'MyApp',
   
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;