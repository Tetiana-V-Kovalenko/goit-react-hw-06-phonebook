import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();
  const onClickDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.contactItem}>
            <p>
              {name} : {number}
            </p>
            <button
              className={css.btnDelete}
              type="button"
              onClick={() => onClickDeleteContact(id)}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
