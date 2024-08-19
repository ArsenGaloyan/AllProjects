import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    setEditText(text);
  }, [text]);

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
    setEditText()
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
            className="changeTextTask"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onClick = {(e)=>e.stopPropagation()}
            />
          ) : (
            taskContent(status, text)
          )}
        </div>
      </div>
      {isEditing ? (
        <div className="taskEditDeleteBlock">
          <button onClick={handleSaveEdit}>Сохранить</button>
          <button onClick={handleCancelEdit}>Отменить</button>
        </div>
      ) : (
        <div className="taskEditDeleteBlock">
          <button
            className="buttonPencilEdit"
            onClick={handleOpenEditTask}
          >
            <img className="imagePencilEdit" src="/img/pencil.png"></img>
          </button>
          <button
            className={`buttonDeleteTask ${theme}`}
            onClick={() => handleDeleteClick(id)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
