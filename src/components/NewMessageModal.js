import React, { useState} from 'react'
import { Modal, Form , Button} from 'react-bootstrap'
import {useContacts} from '../contextModels/ContactsProvider'
import { useMessages } from '../contextModels/MessagesProvider'

export default function NewMessageModal({closeModal}) {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const { contacts } = useContacts()
    const { createMessage } = useMessages()

    function takeCareOfSubmit(e){
        e.preventDefault()
        
        createMessage(selectedContactIds)
        closeModal()
    }


function handleCheckboxChange(contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
        if (prevSelectedContactIds.includes(contactId)) {
            return prevSelectedContactIds.filter(prevId => {
                return contactId !== prevId
            })
        } else {
            return [... prevSelectedContactIds, contactId]
        }
    })
}

    return (
        <>
        <Modal.Header closeButton>
            Create GroupChat
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={takeCareOfSubmit}>
                {contacts.map(contact =>(
                    <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check 
                        type="checkbox"
                        value={selectedContactIds.includes(contact.id)}
                        label={contact.firstname}
                        onChange={() => handleCheckboxChange(contact.id)}
                        />
                    </Form.Group>
                ))}
            <Button type="submit">Create</Button>
            </Form>
        </Modal.Body>
    </>
    )
}
