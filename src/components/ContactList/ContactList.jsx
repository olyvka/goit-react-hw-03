// ContactList.js
import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <p className={styles.contactName}>{contact.name}</p>
          <p className={styles.contactNumber}>{contact.number}</p>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
