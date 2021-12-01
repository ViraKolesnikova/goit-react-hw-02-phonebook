import s from './ContactItem.module.css';

export default function ContactItem({ name, phoneNumber }) {
  return (
    <li className={s.contactListItem}>
      <p>
        {name}: <span>{phoneNumber}</span>
      </p>
    </li>
  );
}
