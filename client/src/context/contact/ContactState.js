import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jilljohnson@gmail.com',
        phone: '0811111111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Jane Thomas',
        email: 'janethomas@gmail.com',
        phone: '0822222222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '083333-3333',
        type: 'professional'
      }
    ],
    current: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    console.log(contact, 'contact')
    dispatch ({ type: ADD_CONTACT, payload: contact})
  }

  //Delete Contact
  const deleteContact = id => {
    dispatch ({ type: DELETE_CONTACT, payload: id })
  }

  //set current contact
  const setCurrent = contact => {
    dispatch ({ type: SET_CURRENT, payload: contact })
  }

  //clear current contact
  const clearCurrent = () => {
    dispatch ({ type: CLEAR_CURRENT })
  }

  //clear curremt contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
    value ={{
      contacts: state.contacts,
      current: state.current,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent
    }}>
      { props.children }
    </ContactContext.Provider>
  )
}

export default ContactState;