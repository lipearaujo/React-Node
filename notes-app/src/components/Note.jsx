import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "./css/Note.css";

const Note = (props) => {
  return (
    <div className="note">
      <div className="note__body">{props.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
          onClick={() => props.deleteNote(props.id)}
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
};

export default Note;
