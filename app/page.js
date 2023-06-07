"use client";

import BotNav from "./components/BotNav";
import NoteState from "./components/Note_state";
export default function Home() {
  return (
    <div>
      <BotNav />
      <NoteState />
      {/* <NoteForm note={notes} setNotes={setNotes} />

      <NotesView notes={notes} setNotes={setNotes} /> */}
    </div>
  );
}
