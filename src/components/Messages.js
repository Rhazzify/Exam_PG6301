import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { useMessages} from '../contextModels/MessagesProvider'

export default function Messages() {

    const { messages} = useMessages()

    return (
        <ListGroup variant="flush">
            {messages.map((message, index) => (
             <ListGroup.Item key = {index}>
                 {message.recipients.map(r => r.name).join(',')} 
             </ListGroup.Item>   
            ))}
        </ListGroup>
    )
}
