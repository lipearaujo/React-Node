import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTile] = useState("");
  const [author, setAuthor] = useState("");
  const [textContent, setTextContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setnewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/read").then((response) => {
      //console.log(resposne);
      setNotes(response.data);
    });
  }, []);

  const handleSaveNote = () => {
    axios
      .post("http://localhost:5000/insert", {
        title: title,
        author: author,
        text: textContent,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setTile("");
    setAuthor("");
    setTextContent("");
  };

  const handleDeleteNote = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`);
  };

  const handleUpdateNote = (id) => {
    axios.put(`http://localhost:5000/update`, {
      id: id,
      newContent: newContent,
      newAuthor: newAuthor,
      newTitle: newTitle,
    });

    setNewContent("");
    setNewTitle("");
    setnewAuthor("");
  };

  return (
    <div className="App">
      <h1>CRUD MERN APPLICATION</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Type your notes..."
          cols="5"
          rows="5"
          style={{ resize: "none" }}
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
        ></textarea>
        <button onClick={handleSaveNote}>Save Note</button>
      </div>

      <div className="savedNotes">
        {notes.map((note, key) => (
          <div className="savedNotesSingle" key={key}>
            <p className="noteTitle">Title: {note.title}</p>
            <p className="noteAuthor">Author: {note.author}</p>
            <p className="noteContent">Content: {note.text}</p>
            <h2>Fields if need to update</h2>
            <input
              type="text"
              placeholder="Update title..."
              className="inputUpdate"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Update author..."
              className="inputUpdate"
              value={newAuthor}
              onChange={(e) => setnewAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Update you note..."
              className="inputUpdate"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <div className="buttons">
              <button
                className="btnUpdate"
                onClick={() => handleUpdateNote(note._id)}
              >
                Update
              </button>
              <button
                className="btnDelete"
                onClick={() => handleDeleteNote(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
