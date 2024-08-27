import "./todo.css";
import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TaskTodo from "./TaskTodo";

// 1. Плавное добавление/удаление таски +!!!!!
// 2. Кастомный checkbox (с помощью label) +
// 2.1 border dotted - только при нажатии, по умолчанию solid (after/before)+
// 2.2 При нажатии на текст таски должен, также меняться completed+
// 3. Добавление таски на Enter +
// 4. Картинку сделать background в css +
// 5. смена темы light/dark +
// 5.1 theme зависит от текущего времени пользователя console.log(new Date())+
// 5.2 кнопка изменения темы - изменяемая иконка+
// 6. объект с состоянием vision{all: true, completed: false, active: false} +
// 7. выполненные тудушки должны быть зачеркнуты +
// 7.1 плавное зачеркивание слева направо
// 7.2 зачеркивание нижнего регистра работает не корректно +
// 8 массив туду должен быть в local storage+
// 9 редактирование таски+
// 10 адаптивная верстка (карандаш и кнопка удалить на мобилке)+
// 11 кнопки отменить/применить стилизовать+
// 12 инпут при тумной теме при нажатии на редактировать должен иметь темный фон и белый шрифт+
// 13 при объеме текста больше чем 75% от всей таски. Дальнейшие слова будут скрыты и заместо них ...+
// 14 полный текст таски будет отображаться в модальном окене при нажатии...+
// 15 модальное окно должно отерываться только при условии что текста больше чем 75% и открывать при нажатии на ...+
// 16 посмотреть про порталы https://ru.legacy.reactjs.org/docs/portals.html видео: https://www.youtube.com/watch?v=V4sHZzX4zh0 
// 17 при наведении на ... появлется эффект ссылки (нижнее подчеркивание)+
const FILTRES = { ALL: "all", ACTIVE: "active", COMPLETED: "completed" };

export const ToDo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [vision, setVision] = useState(FILTRES.ALL);
  const [theme, setTheme] = useState("light");
  const [removingTaskId, setRemovingTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    console.log(new Date());
    console.log(new Date().getHours());

    setTheme(hour >= 7 && hour < 21 ? "light" : "dark");
  }, []);

  const handleDeleteClick = (id) => {
    setRemovingTaskId(id);

    setTimeout(() => {
      handleClickDeleteTask(id);
    }, 500);
  };

  const handleClickDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleChangeToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };
  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  const handleEditTask = (id, newText) => {
    console.log(123);
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const filtredTask = tasks.filter((task) => {
    if (vision === FILTRES.ALL) return true;
    if (vision === FILTRES.ACTIVE) return !task.status;
    if (vision === FILTRES.COMPLETED) return task.status;
    return true;
  });

  const checkBackgroundTheme =
    theme === "light" ? "light backgroundLight" : "dark backgroundDark";

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={`todoContainer ${checkBackgroundTheme}`}>
      <div className="todoContainerBlock">
        <div className="todoContainerHeader">
          <h1 className="todoContainerTitle">T O D O</h1>
          <button
            onClick={handleToggleTheme}
            className={`todoContainerToggleTheme ${theme}`}
          >
            <img
              src={
                theme === "light"
                  ? "./img/img_todo/icon-moon.svg"
                  : "./img/img_todo/icon-sun.svg"
              }
              alt="Иконка"
            ></img>
          </button>
        </div>

        <TodoInput setTasks={setTasks} theme={theme} tasks={tasks} />
        {filtredTask.map(({ id, status, text }) => (
          <TaskTodo
            key={id}
            handleDeleteClick={handleDeleteClick}
            handleChangeToggleTask={handleChangeToggleTask}
            id={id}
            status={status}
            text={text}
            theme={theme}
            removingTaskId={removingTaskId}
            handleEditTask={handleEditTask}
            setIsEditing={setIsEditing}
          />
        ))}

        <div className={`navBar ${theme}`}>
          <button className={`buttonNav ${theme}`}>
            {tasks.filter((task) => !task.status).length} items left
          </button>
          <button
            onClick={() => setVision(FILTRES.ALL)}
            className={`buttonNav ${theme}`}
          >
            All
          </button>
          <button
            onClick={() => setVision(FILTRES.ACTIVE)}
            className={`buttonNav ${theme}`}
          >
            Active
          </button>
          <button
            onClick={() => setVision(FILTRES.COMPLETED)}
            className={`buttonNav ${theme}`}
          >
            Completed
          </button>
          <button onClick={() => setTasks([])} className={`buttonNav ${theme}`}>
            Clear Completed
          </button>
        </div>
      </div>
      <div className="footer">
        <h6 className="footerTitle">Drag and drop to reorder list.</h6>
        <p className="footerString">
          Challenge by <a href="2332"> Frontend Mentor </a>. Coded by{" "}
          <a href="2121"> ApplePieGiraffe</a>.
        </p>
      </div>
    </div>
  );
};
