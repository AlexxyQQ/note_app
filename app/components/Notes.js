export default function NotesView({
  filtered,
  toggle,
  setToggle,
  handleDelete,
  onEdit,
}) {
  return (
    <div>
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {" "}
        {toggle ? "Show All" : "Show Important"}
      </button>
      <h1>Notes</h1>
      <hr />
      <br />
      <ul>
        {filtered.map((note) => (
          <li key={note.id} className="note">
            <h2 style={h2_style}>{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.important ? "Important" : "Not Important"}</p>
            <br />
            <button style={
              
            } onClick={() => handleDelete(note.id)}>Delete</button>{" "}
            <button onClick={() => onEdit(note)}>Edit</button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

const h2_style = {
  color: "red",
  fontSize: 25,
  fontWeight: "bold",
};
