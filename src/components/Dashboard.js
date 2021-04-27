import React from 'react'
import { useMessages } from '../contextModels/MessagesProvider'
import OpenMessage from './OpenMessage'
import Sidebar from './Sidebar'

export default function Dashboard( {id}) {

    const {selectedMessage } = useMessages()

    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar id= {id}/> 
            { selectedMessage && <OpenMessage />}
        </div>
           

    )
}
