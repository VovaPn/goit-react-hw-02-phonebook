import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
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
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
