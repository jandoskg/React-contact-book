import React, { useState } from "react";
import { Button, Header, Image, Input, Modal } from "semantic-ui-react";

const EditContact = ({ editContact }) => {
  const [open, setOpen] = React.useState(true);
  let [item, setItem] = useState(editContact);

  function handleEditInput(e) {
    let newObj = { ...item };
    newObj.task = e.target.value;
    setItem(newObj);
  }

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // trigger={
        //   <Button inverted color="brown">
        //     Add New Contact
        //   </Button>
        // }
      >
        <Modal.Header>Add New Contact</Modal.Header>
        <Modal.Content>
          <div>
            <Input
              value={""}
              //   onChange={(e) => setFullName(e.target.value)}
              size="big"
              placeholder="Enter full name"
            />
            <Input
              value={""}
              //   onChange={(e) => setNumber(e.target.value)}
              size="big"
              placeholder="Enter phone number"
            />
            <Input
              value={""}
              //   onChange={(e) => setEmail(e.target.value)}
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
            // onClick={handleAdd}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditContact;
