import { useState } from "react";
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";
import MyFooter from "./components/MyFooter/MyFooter";

import MyNavbar from "./components/MyNavbar/MyNavbar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);
  const [editContacts, setEditContacts] = useState({});

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
  const closeModal = () => {
    setModal(false);
  };
  const handleEdit = (id) => {
    let obj = contacts.reduce((prev, current) => {
      if (current.id === id) {
        return current;
      }
      return prev;
    });
    setModal(true);
    setEditContacts(obj);
  };

  const handleSave = (obj) => {
    let newContacts = contacts.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setContacts(newContacts);
    closeModal();
  };

  return (
    <>
      <MyNavbar handleContacts={handleContacts} />

      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal && (
        <EditContact
          handleSave={handleSave}
          editContacts={editContacts}
          closeModal={closeModal}
        />
      )}

      <MyFooter />
    </>
  );
}

export default App;
