import React, { useState } from "react";

const AddAndDisplayTodo = () => {
  interface Item {
    title: string;
    desc: string;
  }
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [div, setdiv] = useState<Item[]>([]);

  let renderData = () => {
    if (div.length > 0) {
      return div.map((task, index) => (
        <div
          key={index}
          className="task p-3 flex flex-col border-2 border-gray-500 rounded-lg  justify-center text-center w-[300px]"
        >
          <h1 className="text-3xl font-meduim  ">{task.title}</h1>
          <p className="text-lg py-2  break-words">{task.desc}</p>
          <div>
            <button onClick={() => deleteTask(index)} className="btn mx-2">
              Delete
            </button>
            <button onClick={() => editTask(index)} className="btn">
              Edit Task
            </button>
          </div>
        </div>
      ));
    }
  };
  function deleteTask(index: number): void {
    let copyTasks = [...div];
    copyTasks.splice(index, 1);
    setdiv(copyTasks);
  }
  function editTask(index: number) {
    let copyTasks = [...div];
    settitle(copyTasks[index].title);
    setdesc(copyTasks[index].desc);
    copyTasks.splice(index, 1);
    setdiv(copyTasks);
  }
  return (
    <div>
      <div className="  flex items-center justify-center todo mx-0  mt-16 ">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            if (title.trim().length !== 0 && desc.trim().length !== 0) {
              setdiv([...div, { title, desc }]);
            } else {
              alert("Please write todo first");
            }
            console.log(div);
            settitle("");
            setdesc("");
          }}
          className="md:pr-0 pr-6 md:block flex flex-col items-center justify-center gap-4"
        >
          <input
            onChange={(e) => {
              settitle(e.currentTarget.value);
            }}
            type="text"
            value={title}
            id="tittle"
            placeholder="Enter task title"
            className="border-2 border-black  md:mx-2 py-1 px-4 font-medium text-xl "
          />
          <input
            onChange={(e) => {
              setdesc(e.currentTarget.value);
            }}
            value={desc}
            type="text"
            id="description"
            placeholder="Enter task description"
            className="border-black border-2 md:mx-3  py-1 px-4 font-medium text-xl"
          />
          <button className="btn">Add Task</button>
        </form>
      </div>
      <div className="displayTask flex flex-wrap items-center justify-center gap-8 mt-16 mx-4">
        {renderData()}
      </div>
    </div>
  );
};

export default AddAndDisplayTodo;
