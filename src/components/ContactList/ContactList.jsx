import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { ContactsListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
