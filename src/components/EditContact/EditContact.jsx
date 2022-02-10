import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";

const EditContact = ({ editContacts, handleSave, closeModal }) => {
  const [open, setOpen] = React.useState(false);
  const [contact, setContact] = useState(editContacts);

  const editFullName = (e) => {
    let newObj = {
      ...contact,
      fullName: e.target.value,
    };
    setContact(newObj);
  };
  const editNumber = (e) => {
    let newObj = {
      ...contact,
      number: e.target.value,
    };
    setContact(newObj);
  };
  const editEmail = (e) => {
    let newObj = {
      ...contact,
      email: e.target.value,
    };
    setContact(newObj);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={true}
      >
        <Modal.Header>Save Contact</Modal.Header>
        <Modal.Content>
          <div className="form">
            <Input
              value={contact.fullName}
              onChange={editFullName}
              size="big"
              placeholder="Enter full name"
            />
            <Input
              value={contact.number}
              onChange={editNumber}
              size="big"
              placeholder="Enter phone number"
            />
            <Input
              value={contact.email}
              onChange={editEmail}
              size="big"
              placeholder="Enter your email"
            />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => closeModal(false)}>
            Close
          </Button>
          <Button
            content="Save Contact"
            labelPosition="right"
            icon="checkmark"
            onClick={() => handleSave(contact)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default EditContact;
