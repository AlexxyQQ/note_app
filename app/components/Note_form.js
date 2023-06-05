export default function NoteForm({ isEdit, handleAdd, handleUpdate, editId }) {
  return (
    <div ca>
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
    </div>
  );
}
