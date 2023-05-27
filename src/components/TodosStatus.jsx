import React, { useState } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TodosStatus = (props) => {
  const { activeStatus, changeStatus } = props;

  const arrayOfStatuses = [
    { name: "active", status: "active" },
    { name: "done", status: "done" },
    { name: "all", status: "all" },
  ];

  const onChangeStatus = (status) => {
    changeStatus(status);
  };

  return (
    <ButtonGroup
      sx={{ marginBottom: "20px" }}
      variant="contained"
      aria-label="outlined secondary button group"
    >
      {arrayOfStatuses.map((status) => {
        const variant =
          status.name === activeStatus ? "contained" : "secondary";

        const onClickStatus = () => {
          onChangeStatus(status.name);
        };

        return (
          <Button variant={variant} onClick={onClickStatus}>
            {status.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default TodosStatus;
