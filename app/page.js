"use client";
import { useState } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/Note_form";
import PhoneForm from "./components/phone_form";

export default function Home() {
  const def_notes = [
    {
      id: 1,
      title: "Note 1",
      content: "This is the content of note 1",
      important: false,
    },
    {
      id: 2,
      title: "Note 2",
      content: "This is the content of note 2",
      important: true,
    },
    {
      id: 3,
      title: "Note 3",
      content: "This is the content of note 3",
      important: false,
    },
  ];

  const def_contacts = [
    {
      id: 1,
      name: "Achyut Timsina",
      phone: "9841414243",
    },
    {
      id: 2,
      name: "Kiran Rana",
      phone: "9841103035",
    },
    {
      id: 3,
      name: "Shankar Shrestha",
      phone: "9821232425",
    },
  ];
  const [notes, setNotes] = useState(def_notes);
  const [contacts, setContacts] = useState(def_contacts);
  return (
    <div>
      <NoteForm  />
      {/* <PhoneForm contacts={contacts} setContacts={setContacts} /> */}
    </div>
  );
}
