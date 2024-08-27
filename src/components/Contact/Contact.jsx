import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = (  { id, name, number, removeContact }) => {
    return (
      <div className="contact-div-li" key={id}>
        <li className="contact-li">
          <FaUser />
          {"  "}
          <span className="contact-name">{name}</span> <br />
          <FaPhoneAlt />
          {"  "}
          <span className="contact-number">{number}</span>
        </li>
        <button
          className="button-contact"
          type="button"
          onClick={() => removeContact(id)}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default Contact;
  
