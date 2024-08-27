import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import deleteContacts from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className="contact-div-li" key={id}>
      <li className="contact-li">
        <FaUser />
        {'  '}
        <span className="contact-name">{name}</span> <br />
        <FaPhoneAlt />
        {'  '}
        <span className="contact-number">{number}</span>
      </li>
      <button
        className="button-contact"
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
