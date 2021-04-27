import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { useMessages} from '../contextModels/MessagesProvider'

export default function Messages() {

    const { messages} = useMessages()

    return (
        <ListGroup variant="flush">
            {messages.map((message, index) => (
             <ListGroup.Item key = {index}>

                {message.recipients.map(rec => rec.name).join(', ')}
                 {/*message.recipients.map(rec => `${rec.name} ${rec.id}`).join(', ')*/}
                 {/*message.recipients.join(',')*/} 

             </ListGroup.Item>   
            ))}
        </ListGroup>
    )
}
