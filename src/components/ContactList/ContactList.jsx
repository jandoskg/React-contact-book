import React from "react";
import { Table } from "semantic-ui-react";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <>
      <Table className="Table" celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {contacts.map((item, index) => (
          <ContactCard
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
            item={item}
          />
        ))}
      </Table>
    </>
  );
};

export default ContactList;
