import React, {useRef} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {useContacts} from '../contextModels/ContactsProvider'
import {useMessages} from '../contextModels/MessagesProvider'

export default function NewContactModal({closeModal}) {

    const idRef = useRef()
    const fnameRef = useRef()
    const lnameRef = useRef()
    const emailRef = useRef()
    const { createContact } = useContacts()

    function takeCareOfSubmit (e) {
        e.preventDefault()

        createContact(
            idRef.current.value, fnameRef.current.value, 
            lnameRef.current.value, emailRef.current.value
        )
        closeModal()

    }

    return (
        <>
            <Modal.Header closeButton>
                Create Contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={takeCareOfSubmit}>
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" ref={fnameRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" ref={lnameRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" ref={emailRef} required />
                </Form.Group>
                <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
