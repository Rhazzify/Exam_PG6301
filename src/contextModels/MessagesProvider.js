import React, {useContext} from 'react'
import useLS from '../components/useLS'
import { useContacts} from '../contextModels/ContactsProvider'

const MessagesContext = React.createContext()

export function useMessages(){
    return useContext(MessagesContext)
}

export function MessagesProvider({children}) {

    const [messages, setMessages] = useLS('messages', [])
    const { contacts } = useContacts()

    function createMessage( recipients ){
        setMessages(prevMessages => {
            return [...prevMessages, {recipients, messages : []}]
        })
    }

    const formattedMessages = messages.map(message => {
        const recipients = message.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
        const name = (contact && contact.firstname) || recipient
        return {id: recipient, name}
        })
        return { ...message, recipients}
    })

    const value = {
        messages : formattedMessages, createMessage
    }

    return (
        <MessagesContext.Provider value= {value}>
            {children}
        </MessagesContext.Provider>
    )
}