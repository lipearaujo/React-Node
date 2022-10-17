import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null || []);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/read").then((response) => {
      setNotes(response.data);
    });
  }, [notes]);

  const saveNote = () => {
    axios
      .post("http://localhost:5000/insert", {
        title: title,
        author: author,
        content: content,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
    setAuthor("");
    setContent("");
  };

  const update = (id) => {
    axios.put(`http://localhost:5000/update/${id}`, {
      id: id,
      newTitle: newTitle,
      newAuthor: newAuthor,
      newContent: newContent,
    });

    setNewContent("");
    setNewTitle("");
    setNewAuthor("");
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <textarea
        cols="30"
        rows="10"
        style={{ resize: "none" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={saveNote}>Save Note</button>
      {notes.map((note, key) => (
        <div key={key} style={{ backgroundColor: "green" }}>
          <p>Title: {note.title}</p>
          <p>Author: {note.author}</p>
          <p>Content: {note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete Note</button>

          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          ></textarea>
          <button onClick={() => update(note.id)}>Update Note</button>
        </div>
      ))}
    </div>
  );
}

export default App;
