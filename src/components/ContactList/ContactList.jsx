import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {number}{' '}
            <button
              className={styles.btn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              delete
            </button>
          </p>
        </li>
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
