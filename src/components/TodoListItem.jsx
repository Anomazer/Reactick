import React from "react";

import { red } from "@mui/material/colors";

import { ListItem, Box, ListItemButton, ListItemText } from "@mui/material";

import DeleteIcon from "@mui/icons-material/RemoveCircle";
import CheckIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckIcon2 from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Pending";

import { IconButton } from "@mui/material";

const TodoListItem = (props) => {
  const { editItem, item, deleteItem, changeStatus } = props;

  const onDeleteIconClick = () => {
    deleteItem(item.id);
  };

  const submitEditItem = () => {
    editItem(item.id);
  };

  const onChangeStatusClick = () => {
    const newStatus = item.status === "done" ? "active" : "done";
    changeStatus(item.id, newStatus);
  };

  return (
    <ListItem disablePadding>
      <IconButton onClick={onChangeStatusClick}>
        {item.status === "done" ? (
          <CheckIcon2 />
        ) : (
          <CheckIcon color="success" />
        )}
      </IconButton>
      <ListItemText
        onClick={() => {
          {
            console.log(`Clicked: ${item.title}`);
          }
        }}
        sx={{
          textDecoration: item.status === "done" ? "line-through" : "none",
        }}
      >
        {item.title}
      </ListItemText>

      <Box>
        <IconButton onClick={onDeleteIconClick}>
          <DeleteIcon sx={{ color: red[400] }} />
        </IconButton>

        <IconButton onClick={submitEditItem}>
          <EditIcon color="primary" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoListItem;
