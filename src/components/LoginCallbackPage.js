import * as React from 'react';
import {useEffect} from 'react'
import { useHistory } from 'react-router';

export function LoginCallbackPage({onAccesToken}) {

    const hash = Object.fromEntries(new URLSearchParams(window.location.hash.substr(1)));
  
    const history = useHistory()

    useEffect(() =>{
        const {access_token} = hash;
        onAccesToken(access_token);
        history.push("/profile");
    }, [])
    

    return (<h1>Login callback</h1>);
}