import { useState } from "react";
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

import MyNavbar from "./components/MyNavbar/MyNavbar";

function App() {
  const [contacts, setContacts] = useState([]);
  let [modal, setModal] = useState(false);
  let [editContact, setEditContact] = useState({});

  const handleContacts = (newObj) => {
    let newContacts = [...contacts];

    newContacts.push(newObj);
    setContacts(newContacts);
  };

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContacts);
  }

  function handleEdit(index) {
    setModal(true);
    setEditContact(contacts[index]);
  }

  return (
    <>
      <MyNavbar handleContacts={handleContacts} />

      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {modal ? <EditContact editContact={editContact} /> : null}
    </>
  );
}

export default App;
