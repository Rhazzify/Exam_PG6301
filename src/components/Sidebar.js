import React, {useState} from 'react'
import {Tab, Nav, Button, Modal} from 'react-bootstrap';
import Messages from './Messages'
import Contacts from './Contacts'
import NewContacModal from './NewContactModal'
import NewMessageModal from './NewMessageModal'


const MESSAGES_KEY = 'messages'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({id}) {

    const [activeKey, setActiveKey] = useState(MESSAGES_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const messageBoxOpen = activeKey === MESSAGES_KEY
    
    function closeModal () {
        setModalOpen(false)
    }


    return (
        <div style={{width: '300px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey={MESSAGES_KEY}>Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={MESSAGES_KEY}>
                        <Messages />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted" placeholdertext="Google Authenitcated">{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className="rounded-0">
                    New {messageBoxOpen ? 'Messages' : 'Contacts'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {messageBoxOpen ?
                <NewMessageModal closeModal={closeModal}/> :
                <NewContacModal closeModal={closeModal}/>
            }
            </Modal>
        </div>
    )
}
