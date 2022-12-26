import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    const form = evt.currentTarget;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
    form.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={styles.label}>Phonenumber</label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
