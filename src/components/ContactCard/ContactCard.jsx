import React from "react";
import { Button } from "semantic-ui-react";
import { Table } from "semantic-ui-react";

const ContactCard = ({ item, index, handleDelete, handleEdit }) => {
  const extra = (
    <div>
      <Button inverted color="olive" onClick={() => handleEdit(index)}>
        Edit
      </Button>
      <Button color="red" onClick={() => handleDelete(item.id)}>
        Delete
      </Button>
    </div>
  );
  return (
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{item.fullName}</Table.Cell>
          <Table.Cell>{item.number}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell textAlign="right">{extra}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
};

export default ContactCard;
