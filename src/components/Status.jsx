import React from "react";

const Status = ({status}) => {
  return (
    <span className={`btn btn-${status ? "success" : "warning"}`}>
      {status ? "Complete" : "Pending"}
    </span>
  );
};

export default Status;
