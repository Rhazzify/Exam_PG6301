import React, {useContext} from 'react'
import useLS from '../components/useLS'

const ContactsContext = React.createContext()

export function useContacts(){
    return useContext(ContactsContext)
}

export function ContactsProvider({children}) {

    const [contacts, setContacts] = useLS('contacts', [])

    function createContact(id, firstname, lastname, email ){
        setContacts(prevContacts => {
            return [...prevContacts, {id, firstname, lastname, email}]
        })
    }

    return (
        <ContactsContext.Provider value= {{ contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
