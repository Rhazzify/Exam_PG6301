import React, {useRef} from 'react';
import { fetchJson } from './fetchJson';
import {Container, Form, Button} from 'react-bootstrap';
import {v4 as uuidV4 } from 'uuid';
import {useHistory} from 'react-router'



export function LoginPage({identityProvider, onIdSubmit}) {

    const idRef = useRef();
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
        history.push("/profile")
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }


    const {discoveryURL, client_id} = identityProvider;
    
  async function handleLogin() {
        const {authorization_endpoint} = await fetchJson(discoveryURL);
        const params = {
            client_id,
            response_type: "token",
            scope: "openid email profile",
            redirect_uri: window.location.origin  + "/login/callback",
        }
        window.location.href = authorization_endpoint + "?" + new URLSearchParams(params);
    }

    return (
        
    <Container className="align-items-center d-flex" style = {{height: '100vh'}}>
        <div>
        <h1>ChatApp</h1>
        <button onClick={handleLogin}>Login with Google</button>
        </div>
        
        <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
                <Form.Label>Enter your ID</Form.Label>
                <Form.Control type="text" ref={idRef} required />
            </Form.Group>
            <Button type="submit" className="mr-2">Login</Button>
            <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
        </Form>
        
    </Container>
    )
}
