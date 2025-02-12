import React from "react";

const AllTasks = () => {
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
        <tbody>
            <tr className="text-center">
                <td>1</td>
                <td>Morning</td>
                <td>Pending / Complete</td>
                <td>Edit / Delete</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllTasks;
