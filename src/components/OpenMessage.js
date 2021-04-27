import React, {useState} from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import {useMessages, selectedMessage} from '../contextModels/MessagesProvider'

export default function OpenMessage() {

    const [text, setText] = useState('')
    const {sendMessage} = useMessages()

    function sendThisMessage(e){
        e.preventDefault()

        sendMessage(selectedMessage.recipients.map(r => r.id), text)
        setText('')
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form onSubmit={sendThisMessage}>
                <Form.Group className="m-2">
                    <InputGroup>
                    <Form.Control 
                    as="textarea" 
                    required 
                    value={text}
                    onChange= {e => setText(e.target.value)}
                    style={{ height: '75px', resize: 'none'}}
                    />
                    <InputGroup.Append>
                    <Button type="submit">Send</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
