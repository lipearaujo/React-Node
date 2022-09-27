import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "./css/Note.css";
import { v4 as uuid } from "uuid";

const Notes = () => {
  //states
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);

    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //Another way if we does not use useState(JSON.parse(localStorage.notes) || []);
  /*//get the saved notes and add them to the array
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []); */

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}

      <CreateNote
        inputText={inputText}
        textHandler={textHandler}
        saveHandler={saveHandler}
      />
    </div>
  );
};

export default Notes;
