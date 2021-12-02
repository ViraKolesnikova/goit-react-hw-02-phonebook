import { Component } from 'react';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateContactsList = obj => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, obj] }));
  };

  updateFilter = event => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };

  resetFilter = event => {
    this.setState({ filter: '' });
  };

  findContactsByFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.findContactsByFilter();

    return (
      <>
        <h1>Phonebook</h1>
        <Form
          addContact={this.updateContactsList}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          onFilterInputEnter={this.updateFilter}
          onFilterOut={this.resetFilter}
          filterValue={filter}
        />
        <ContactList
          contactsData={filteredContacts}
          onDeleteBtn={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
