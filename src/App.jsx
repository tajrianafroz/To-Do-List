import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTasks from "./components/AddTasks";
import AllTasks from "./components/AllTasks";

const App = () => {
  return (
    <>
      <AddTasks />

      <AllTasks/>
    </>
  );
}

export default App;
