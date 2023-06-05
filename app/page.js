"use client";

import NoteState from "./components/Note_state";
export default function Home() {
  return (
    <div>
      <NoteState />
      {/* <NoteForm note={notes} setNotes={setNotes} />

      <NotesView notes={notes} setNotes={setNotes} /> */}
    </div>
  );
}
