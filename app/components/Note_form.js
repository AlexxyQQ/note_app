"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NoteForm() {
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const filtered = toggle ? notes.filter((note) => note.important) : notes;

  useEffect(() => {
    axios.get("http://localhost:3002/notes").then((response) => {
      console.log(response);
      setNotes(response.data);
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const new_note = {
      title: e.target.title.value,
      content: e.target.content.value,
      important: e.target.important.checked,
    };
    axios.post("http://localhost:3002/notes", new_note).then((res) => {
      console.log(res);
      setNotes(notes.concat(res.data));
    });

    e.target.title.value = "";
    e.target.content.value = "";
    e.target.important.checked = false;
  };

  const handleUpdate = (e, noteId) => {
    e.preventDefault();

    const updatedNote = {
      id: noteId,
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      important: document.getElementById("important").checked,
    };
    axios
      .put(`http://localhost:3002/notes/${noteId}`, updatedNote)
      .then((res) => {
        console.log(res);
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === updatedNote.id ? { ...note, ...updatedNote } : note
          )
        );
      });

    setEdit(false);
    setEditId(null);
    e.target.title.value = "";
    e.target.content.value = "";
    e.target.important.checked = false;
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      axios.delete(`http://localhost:3002/notes/${id}`).then((res) => {
        console.log(res);
        setNotes(notes.filter((note) => note.id !== id));
      });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const onEdit = (note) => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const importantCheckbox = document.getElementById("important");

    titleInput.value = note.title;
    contentInput.value = note.content;
    importantCheckbox.checked = note.important;

    setEdit(true);
    setEditId(note.id);
  };

  return (
    <div>
      <form onSubmit={!isEdit ? handleAdd : (e) => handleUpdate(e, editId)}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <label htmlFor="content">Content</label>
        <br />
        <textarea id="content" name="content" />
        <br />
        <label htmlFor="important">Important</label>
        <input type="checkbox" id="important" name="important" />
        <br />
        <button type="submit">{!isEdit ? "Add Note" : "Update"}</button>
      </form>

      <div>
        <button onClick={handleToggle}>{toggle ? "Important" : "All"}</button>
      </div>

      <div>
        <h1>Notes</h1>
        <hr />
        <br />
        <ul>
          {filtered.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <p>{note.important ? "Important" : "Not Important"}</p>
              <br />
              <button onClick={() => handleDelete(note.id)}>Delete</button>{" "}
              <button onClick={() => onEdit(note)}>Edit</button>
              <hr />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
