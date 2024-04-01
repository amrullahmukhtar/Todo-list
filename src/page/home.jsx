import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [score, setScore] = useState(0);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const capitalizedTask =
        newTask.charAt(0).toUpperCase() + newTask.slice(1);
      setTasks([...tasks, { text: capitalizedTask, checked: false }]);
      setNewTask("");
    }
  };

  const handleToggleCheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);

    if (updatedTasks[index].checked) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="w-100 h-20 items-center justify-center flex font-bold text-xl text-gray-500">
        Chores ToDo List
      </div>
      <div></div>
      <div>
        {tasks.map((task, index) => (
          <div
            className="w-100  justify-between items-center flex px-3 "
            key={index}
          >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleToggleCheck(index)}
            />
            <div
              className="task-text item-center m-3 w-full flex text-justify  bg-white border rounded-lg my-1 px-3"
              style={{ textDecoration: task.checked ? "line-through" : "none" }}
            >
              {task.text}
            </div>

            <div className="border-2 border-solid border-red-500 m-1 w-7   flex items-center">
              <span
                className="material-symbols-outlined "
                onClick={() => handleDeleteTask(index)}
              >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="item-center m-1 px-2 w-100 text-justify">
        <hr className="border-solid border-2" />
        <center>
          <span className="text-lg font-bold  text-gray-500">
            Done : {score}
          </span>
        </center>
        <span>Add todo</span>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Submit to list..."
          className="my-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <button className="add text-white bg-zinc-600 w-[100PX] h-[40px]  rounded-lg text-center mt-2 font-bold py-2 "
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <div></div>
    </div>
  );
}

export default TodoList;
