import * as React from 'react';
import { useLoading } from './useLoading';

export function ProfilePage({loadProfile}) {
    const {loading, error, data} = useLoading(async () => await loadProfile());

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
        <>
        <h1>Profile</h1>
        <div>{data.name}</div>
        {data.picture &&(
            <div>
                <img src={data.picture}></img>
            </div>
        )}
        <div>{data.email}</div>
        </>

    ) 
}
