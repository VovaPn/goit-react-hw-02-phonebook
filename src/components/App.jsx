import { Container } from './Container/Container';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterInput = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChange={this.filterInput} />
        ) : (
          <p>Contact list is empty</p>
        )}
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
