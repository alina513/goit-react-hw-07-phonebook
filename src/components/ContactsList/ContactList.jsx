

import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectContacts } from '../../redux/selectors';
import { selectFilter } from '../../redux/selectors';


export const ContactsList = () => {
  const filters = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  console.log(contacts)

  const displayedContacts = (contacts, filters) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    
  };

  const filteredContacts = displayedContacts(contacts, filters);


  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact value={contact} key={contact.id} />
      ))}
    </ul>
  );
};
