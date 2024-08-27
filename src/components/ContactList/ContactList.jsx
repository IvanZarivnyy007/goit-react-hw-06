import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div className="contact-div">
      <ul className="contact-ul">
        {contacts.map((contact) => (
          <>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
