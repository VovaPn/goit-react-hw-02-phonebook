import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
