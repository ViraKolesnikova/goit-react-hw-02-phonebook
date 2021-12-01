import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contactsData }) {
  return (
    <ul className={s.contactList}>
      {contactsData.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} phoneNumber={number} />
      ))}
    </ul>
  );
}
