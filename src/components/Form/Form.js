import { Component } from 'react';
import shortid from 'shortid';

import s from './Form.module.css';

export default class Form extends Component {
  nameID = shortid.generate();
  numberID = shortid.generate();

  state = {
    name: '',
    number: '',
  };

  updateState = event => {
    let { name, value } = event.target;
    this.props.contacts.forEach(contact => {
      if (contact.name === value) {
        alert(`${value} is already in your contacts!`);
        this.reset();
      }
      this.setState({ [name]: value });
    });
  };

  onSubmitAddContact = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const contactID = shortid.generate();
    const newContact = {
      id: contactID,
      name,
      number,
    };
    this.props.addContact(newContact);
    this.reset();
  };

  reset = () => {
    console.log('RESET!!!');
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmitAddContact}>
        <label className={s.label} htmlFor={this.nameID}>
          Name
        </label>
        <input
          id={this.nameID}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.updateState}
        />
        <label className={s.label} htmlFor={this.numberID}>
          Number
        </label>
        <input
          id={this.numberID}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.updateState}
        />
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
