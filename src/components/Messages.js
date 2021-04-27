import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { useMessages} from '../contextModels/MessagesProvider'

export default function Messages() {

    const { messages, selectMessageIndex} = useMessages()

    return (
        <ListGroup variant="flush">
            {messages.map((message, index) => (
             <ListGroup.Item 
             key = {index}
             action
             onClick={()=> selectMessageIndex(index)} 
             active={message.selected}
             >

                {message.recipients.map(rec => rec.name).join(', ')}
                 {/*message.recipients.map(rec => `${rec.name} ${rec.id}`).join(', ')*/}
                 {/*message.recipients.join(',')*/} 

             </ListGroup.Item>   
            ))}
        </ListGroup>
    )
}
