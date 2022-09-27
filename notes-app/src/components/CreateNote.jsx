import React from "react";

const CreateNote = (props) => {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - props.inputText.length;

  return (
    <div className="note">
      <textarea
        className="create__textarea"
        placeholder="Type..."
        value={props.inputText}
        onChange={props.textHandler}
        maxLength="100"
      ></textarea>

      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={props.saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
