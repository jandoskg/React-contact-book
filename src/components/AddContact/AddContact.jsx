import React, { useState } from "react";
import { Button, Header, Image, Input, Modal, Icon } from "semantic-ui-react";
import "./AddContact.css";

const AddContact = ({ handleContacts }) => {
  const [open, setOpen] = React.useState(false);
  let [fullName, setFullName] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");

  const handleAdd = (e) => {
    if (!fullName || !number || !email) {
      alert("Заполните форму");
      return;
    }
    let newObj = { fullName, number, email, id: Date.now() };

    handleContacts(newObj);

    setFullName("");
    setNumber("");
    setEmail("");

    setOpen(false);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button inverted color="brown">
          <Icon loading name='asterisk' />
            Add New Contact
          </Button>
        }
      >
        <Modal.Header>Add New Contact</Modal.Header>
        <Modal.Content>
          <div className="form">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              size="big"
              placeholder="Enter full name"
            />
            <Input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              size="big"
              placeholder="Enter phone number"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="big"
              placeholder="Enter your email"
            />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
            content="Add Contact"
            labelPosition="right"
            icon="checkmark"
            onClick={handleAdd}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default AddContact;
