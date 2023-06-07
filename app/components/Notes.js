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
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => setToggle(!toggle)}
      >
        {" "}
        {toggle ? "Show All" : "Show Important"}
      </button>
      <h1 style={{ color: "Black", fontSize: 50, fontWeight: "bold" }}>
        Notes
      </h1>
      <hr />
      <br />
      <ul>
        {filtered.map((note) => (
          <li key={note.id} className="note">
            <h2 style={h2_style}>{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.important ? "Important" : "Not Important"}</p>
            <br />
            <button
              onClick={() => handleDelete(note.id)}
              className="btn btn-warning"
            >
              Delete
            </button>{" "}
            <button
              onClick={() => onEdit(note)}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Edit
            </button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

const h2_style = {
  color: "Black",
  fontSize: 25,
  fontWeight: "bold",
};
