import React, { useState, useEffect } from "react";
import { TiPencil } from "react-icons/ti";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowUpOutline } from "react-icons/ti";
import Modal from "./Modal.js";

export default function TaskTodo({
  status,
  text,
  id,
  handleChangeToggleTask,
  handleDeleteClick,
  handleEditTask,
  theme,
  removingTaskId,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shortenedText, setShortenedText] = useState(text);
  const [openModalWindow,setOpenModalWindow] = useState(false);





  useEffect(() => {
    if (isExpanded || text.length <= 25) {
      setShortenedText(text); 
    } else {
      setShortenedText(text.substring(0, 25) ); 
    }
  }, [text, isExpanded]);

  const taskContent = function (status, text) {
    return status ? (
      <p className={`taskText completed ${theme}`}>
        <p className="taskContentSmoothStrikethrough">{text}</p>
      </p>
    ) : (
      <p className={`taskText ${theme}`}>{text}</p>
    );
  };
  const handleSaveEdit = () => {
    handleEditTask(id, editText);
    setIsEditing(false);
  };
  const handleCancelEdit = () => {
    setIsEditing(!isEditing)
    setEditText(text)
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
  };
  const handleOpenEditTask = () =>{
    setEditText(text)
    setIsEditing(true)

  }
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`task ${removingTaskId === id ? "taskFadeOut" : ""} ${theme}`}
      key={id}
    >
      <div className="textAndCheckbox">
        <label>
          <input
            className="inputCheckBox"
            onChange={() => handleChangeToggleTask(id)}
            type="checkbox"
            checked={status}
          />
          {<span className={`customCheckbox ${theme}`}></span>}
        </label>

        <div
          className="clickTextTask"
          onClick={() => handleChangeToggleTask(id)}
        >
          {isEditing ? (
            <textarea
            className= {` changeTextTask ${theme}`}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onClick = {(e)=>e.stopPropagation()}
            />
          ) : (
            <span className="textAndEllipsis">
            {taskContent(status, shortenedText)}{" "}
            {!isExpanded && text.length > 25 && (
              <span
                className= {` expandText ${theme}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModalWindow(true);
                }}
              >
                ...
              </span>
            )}
            {isExpanded && (
              <span
                className="collapseText"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleExpand();
                }}
              >
               {theme === "light"?<TiArrowUpOutline />:<TiArrowUpThick />}
              </span>
            )}
          </span>
          )}
        </div>
      </div>
      {isEditing ? (
        <div className="taskEditDeleteBlock">
          <button  className='buttonSaveEdit'onClick={handleSaveEdit}>Save</button>
          <button className='buttonDeleteEdit' onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div className="taskEditDeleteBlock">
          <button
            className="buttonPencilEdit"
            onClick={handleOpenEditTask}
          >
           {theme === "light"?<TiPencil />:<TiPencil style = {{color: "white"}}/>}
          </button>
          <button
            className={`buttonDeleteTask ${theme}`}
            onClick={() => handleDeleteClick(id)}
          >
            X
          </button>
        </div>
      )}
         {openModalWindow && (
        <Modal theme = {theme} text={text} onClose={() => setOpenModalWindow(false)} />
      )}
    </div>

  );
}
