import * as React from 'react';
import { useLoading } from './useLoading';
import {useHistory} from 'react-router'
import Sidebar from './Sidebar'

export function ProfilePage({loadProfile, id}) {
    const {loading, error, data} = useLoading(async () => await loadProfile());

    const history = useHistory()

    function goToDashboard(){
        history.push("/profile")
    }

    if (loading) {
        return <>
        <h1>Loading ...</h1>
        </>
    }
    if (error) {
        return (
            <>
            <h1>An error occured</h1>
            <div>{error.toString()}</div>
            </>
        )
    }
    
    return (
        <div className="d-flex">
            <div>
            <h1>Authenticated with Google</h1>
            <div>{data.name}</div>
            {data.picture &&(
                <div>
                    <img src={data.picture}></img>
                </div>)}
            <div>{data.email}</div>
            </div>
            
            <div className="d-flex" style={{height: '100vh'}}>
                <Sidebar id = {id}/>
            </div>
        </div>
    ) 
}
