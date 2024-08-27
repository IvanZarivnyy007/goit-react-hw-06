import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContact] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return (
      savedContacts || [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = (contactsId) => {
    setContact((preContacts) => {
      return preContacts.filter((contact) => contact.id !== contactsId);
    });
  };

  const addContact = (newContacts) => {
    setContact((preContacts) => [...preContacts, newContacts]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      contact.number.includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox handleChange={handleChange} imputValue={inputValue} />
        <ContactList contacts ={visibleContacts}  removeContact={removeContact} />

      </div>
    </>
  );
}

export default App;
