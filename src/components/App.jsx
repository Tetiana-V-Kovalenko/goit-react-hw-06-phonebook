// import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import FormPhonebook from './FormPhonebook/FormPhonebook';
import Filter from './Contacts/Filter';
import Contacts from './Contacts/Contacts';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filterArr = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 style={{ marginLeft: '50px' }}>Phonebook</h1>
      <FormPhonebook />
      <h2 style={{ marginLeft: '50px' }}>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? (
        <p style={{ marginLeft: '30px' }}>There are no contact</p>
      ) : (
        <Contacts contacts={filter !== '' ? filterArr : contacts} />
      )}
    </div>
  );
};
