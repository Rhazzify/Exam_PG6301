import  React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import {Route, Switch} from "react-router";

import { ProfilePage } from './ProfilePage';
import { fetchJson } from './fetchJson';
import { LoginPage } from './LoginPage';
import { LoginCallbackPage } from './LoginCallbackPage';

export function App() {
    const [access_token, setAccess_token] = useState();

    const googleIdentityProvider = {
        discoveryURL: "https://accounts.google.com/.well-known/openid-configuration",
        client_id: "996668650589-k58u051d4r4e4duht0af5nsm4mfe3npi.apps.googleusercontent.com",

    }
 
    async function loadProfile(){
        return fetchJson("/api/profile", {
            headers: {
                ... (access_token ? { Authorization: `Bearer ${access_token}`} : {})
            }
        });
    }

    return (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact>
                <LoginPage identityProvider = {googleIdentityProvider} />
            </Route>
            <Route path={"/test"} exact>
                <h1>Welcome</h1>
                <ul>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </Route>
            <Route path={"/profile"}>
               <ProfilePage loadProfile = {loadProfile} />
            </Route>
            
            <Route path={"/login/callback"}>
                <LoginCallbackPage identityProvider={googleIdentityProvider} 
                onAccesToken={access_token => setAccess_token(access_token)}
                />
            </Route>
            <Route>
                 <h1>Not found</h1>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}





