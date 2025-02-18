import React, { useState, useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";

const AddTasks = ({ storeAndUpdate, selectedTask }) => {
  const [input, setInput] = useState(selectedTask?.title ?? "");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setInput(selectedTask?.title ?? "");
  }, [selectedTask]);

  return (
    <div className="col-5 mx-auto my-5">
      <div className="card">
        <div className="card-header bg-dark text-white">
          {selectedTask ? "Edit" : "Add"} Task
        </div>
        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              storeAndUpdate(input, selectedTask);
              setInput("");
            }}
            className="d-flex"
          >
            <input
              value={input}
              className={`form-control rounded-0 ${errors && "is-invalid"}`}
              type="text"
              placeholder="Add Task"
              onChange={(e) => {
                setInput(e.target.value);

                if (input.length < 6) {
                  setErrors("please write minimum 6 characters");
                } else {
                  setErrors(null);
                }
              }}
            />
            <button
              disabled={errors || input.length == 0 ? true : false}
              className="btn btn-sm btn-dark col-2 rounded-0"
            >
              {selectedTask ? <BiSolidPencil /> : '+'} Task
            </button>
          </form>
          {errors && <span className="text-danger"> {errors} </span>}
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
