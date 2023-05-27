import React, { useState } from "react";

import "./index.css";
import { AppHeader, TodoList, SearchPanel, TodosStatus } from "./components";
import { Box } from "@mui/material";

const App = () => {
  const isLogged = true;
  const login = <span> Log in please </span>;
  const welcome = <span> Welcome, user </span>;

  const [activeStatus, setActiveStatus] = useState("active");

  const onChangeStatus = (status) => {
    setActiveStatus(status);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        {isLogged ? welcome : login}

        <AppHeader />

        <TodosStatus
          activeStatus={activeStatus}
          changeStatus={onChangeStatus}
        />

        <TodoList activeTodosStatus={activeStatus} />
      </Box>
    </Box>
  );
};

export default App;
