import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {useContacts} from '../contextModels/ContactsProvider'

export default function Contacts() {

    const {contacts} = useContacts()

    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
             <ListGroup.Item key = {contact.id}>
                 {contact.firstname} 
                 {contact.lastname}<br></br>
                 {contact.email}
             </ListGroup.Item>   
            ))}
        </ListGroup>
    )
}
