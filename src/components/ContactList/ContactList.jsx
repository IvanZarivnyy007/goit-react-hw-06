import Contact from "../Contact/Contact";


const ContactList = ({ contacts , removeContact}) => {
  return (
    <div className="contact-div">
      <ul className="contact-ul">
        {contacts.map((contact) => (
          
          <>
            <Contact id={contact.id}
              name={contact.name}
              number={contact.number}
              removeContact={removeContact}/>
            </>
          
        ))}
      </ul>
    </div>
  );
};

export default ContactList;



