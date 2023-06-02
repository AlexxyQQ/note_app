"use client";
import { useState } from "react";

export default function PhoneForm({ contacts, setContacts }) {
  const [searched, setSearched] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    const new_contact = {
      id: contacts.length + 1,
      name: e.target.name.value,
      phone: e.target.phone.value,
    };
    setContacts(contacts.concat(new_contact));

    e.target.name.value = "";
    e.target.phone.value = "";
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter((contact) => contact.id !== id));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearched(true);
    setContacts(filtered);
  };

  return (
    <div>
      {/* Adding Form */}
      <form onSubmit={handleAdd}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="Name" id="name" name="name" />
        <br />
        <label htmlFor="Phone">Phone</label>
        <br />
        <input id="phone" name="phone" />
        <br />
        <button type="submit">Add Contact</button>
      </form>
      <br />
      {/* Search */}

      <div>
        <form onSubmit={handleSearch}>
          <label htmlFor="title">Search</label>
          <br />
          <input type="Search" id="search" name="Search" />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Display */}
      <div>
        <h1>Contacts</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
