export default function NoteForm({ isEdit, handleAdd, handleUpdate, editId }) {
  return (
    <div ca>
      <form onSubmit={!isEdit ? handleAdd : (e) => handleUpdate(e, editId)}>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Note Title</span>
          </label>
          <label className="input-group" htmlFor="title">
            <span>Title</span>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Note 1"
              className="input input-bordered "
            />
          </label>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Note Content</span>
          </label>
          <label className="input-group" htmlFor="content">
            <span>Content</span>
            <input
              type="text"
              id="content"
              name="content"
              placeholder="Content"
              className="input input-bordered "
            />
          </label>
        </div>
        <label className="label">
          <span className="label-text">Important</span>
        </label>
        <input
          type="checkbox"
          id="important"
          name="important"
          className="checkbox"
          checked={isEdit ? "checked" : "checked"}
        />
        <br />
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          type="submit"
        >
          {!isEdit ? "Add Note" : "Update"}
        </button>
      </form>
    </div>
  );
}
