import React, {useContext, useState } from 'react'
import useLS from '../components/useLS'
import { useContacts} from '../contextModels/ContactsProvider'

const MessagesContext = React.createContext()

export function useMessages(){
    return useContext(MessagesContext)
}

export function MessagesProvider({id, children}) {

    const [messages, setMessages] = useLS('messages', [])
    const [selectedMessageIndex, setSelectedMessageIndex] = useState(0)
    const { contacts } = useContacts()

    function createMessage( recipients ){
        setMessages(prevMessages => {
            return [...prevMessages, {recipients, message : []}]
        })
    }

    function addMessageToConversation({ recipients, text, sender}) 
    {
        setMessages(prevMessages => {
            let madeChange = false
            const newMessage = { sender, text}
            const newTalks = prevMessages.map(messageText => {
                if (arrayEquality(message.recipients, recipients)) {
                    madeChange = true
                    return {
                        ...messageText, messages: [...messageText.messages, newMessage]
                    }
                }
                return message
            })
            
            if (madeChange){
                return newTalks
            } else {
                return [...prevMessages, 
                    { recipients, messages: [newMessage]}]
            }
        })
    }

    function sendMessage(recipients, text){
        addMessageToConversation({recipients, text, sender: id})
    }

    const formattedMessages = messages.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
        const name = (contact && contact.firstname) || recipient
        return {id: recipient, name}
        })
        const selected = index === selectedMessageIndex
        return { ...conversation, recipients, selected}
    })

    const value = {
        messages : formattedMessages, 
        selectedMessage: formattedMessages[selectedMessageIndex],
        sendMessage,
        selectMessageIndex: setSelectedMessageIndex, 
        createMessage
    }

    return (
        <MessagesContext.Provider value = {value}>
            {children}
        </MessagesContext.Provider>
    )
}

function arrayEquality(a, b) {
    if (a.length !== b.length) return false
  
    a.sort()
    b.sort()
  
    return a.every((element, index) => {
      return element === b[index]
    })
  }