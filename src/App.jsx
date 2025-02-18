import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTasks from "./components/AddTasks";
import AllTasks from "./components/AllTasks";
import Swal from "sweetalert2";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Store and Update
  const storeAndUpdate = (input, editTask = null) => {
    if (!editTask) {
      setTasks([
        {
          id: Math.random(),
          title: input,
          status: false,
        },
        ...tasks,
      ]);
    } else {
      // Add Updated Task
      let cloneTasks = [...tasks];
      editTask.title = input;
      setTasks(cloneTasks);
      setSelectedTask(null);
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // Complete Task
  const completeTask = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Successfully Completed",
    });
  };

  return (
    <>
      <AddTasks storeAndUpdate={storeAndUpdate} selectedTask={selectedTask} />

      <AllTasks
        allTasks={tasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        setSelectedTask={setSelectedTask}
        selectedTask={selectedTask}
      />
    </>
  );
};

export default App;
