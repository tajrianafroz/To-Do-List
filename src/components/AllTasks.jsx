import React from "react";
import Status from "./Status";
import Nothing from "./Nothing";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { ReactSortable } from "react-sortablejs";

const AllTasks = ({
  allTasks,
  setTasks,
  deleteTask,
  completeTask,
  setSelectedTask,
  selectedTask,
}) => {
  return (
    <div className="container">
      <table className="table table-responsive table-bordered table-striped">
        <thead>
          <tr className="text-center py-3">
            <th>Sl.</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {allTasks.length == 0 && <Nothing />}
        <ReactSortable list={allTasks} setList={setTasks} tag={"tbody"}>
          {allTasks.map((task, index) => {
            return (
              <tr key={task.id} className="text-center">
                <td>{++index}</td>
                <td>{task.title}</td>
                <td>
                  <Status status={task.status} />
                </td>
                <td>
                  <div className="btn-group">
                    {!task.status && (
                      <button
                        onClick={completeTask}
                        className="btn btn-sm btn-dark"
                      >
                        <FaCheck /> Complete
                      </button>
                    )}

                    {!task.status && (
                      <button
                        onClick={() => setSelectedTask(task)}
                        className="btn btn-primary btn-sm"
                      >
                        <BiSolidPencil />
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      disabled={task.status || selectedTask}
                      className="btn btn-danger btn-sm"
                    >
                      <MdDelete />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </ReactSortable>
      </table>
    </div>
  );
};

export default AllTasks;
