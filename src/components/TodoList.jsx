import React, { useState } from "react";

import List from "@mui/material/List";
import Box from "@mui/material/Box";

import TodoListItem from "./TodoListItem";
import SearchPanel from "./SearchPanel";

import Dialog from "./Dialog";
import TodoItemForm from "./TodoItemForm";

const TodoList = (props) => {
  const { activeTodosStatus } = props;

  const [todoData, setTodoData] = useState([
    { title: "Wake up", id: 1, status: "done" },
    { title: "Eat", id: 2, status: "active" },
    { title: "Do something", id: 3, status: "active" },
  ]);

  const [open, setOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onAddItem = (name) => {
    const newItem = {
      title: name,
      id: Math.floor(Math.random() * 21432443242324 + 1),
      status: "active",
    };

    setTodoData([...todoData, newItem]);
  };

  const editItem = (id) => {
    const note = todoData.find((note) => note.id === id);
    setEditNote(note);

    handleOpen();
  };

  const submitNoteEdit = (value) => {
    const newTodoItem = {
      ...editNote,
      title: value,
    };

    const updatedTodoDate = todoData.map((note) => {
      if (note.id === newTodoItem.id) {
        return newTodoItem;
      }

      return note;
    });

    setTodoData(updatedTodoDate);
    handleClose();
  };

  const onChangeStatus = (id, newStatus) => {
    setTodoData((items) =>
      items.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            status: newStatus,
          };
        }

        return todoItem;
      })
    );
  };

  const onDeleteItemButtonClick = (deleteItemId) => {
    setTodoData((prev) => {
      return prev.filter((item) => item.id !== deleteItemId);
    });
  };

  return (
    <Box>
      <SearchPanel addItem={onAddItem} />

      <List>
        {todoData.map((item) => {
          return item.status === activeTodosStatus ||
            activeTodosStatus === "all" ? (
            <TodoListItem
              editItem={editItem}
              changeStatus={onChangeStatus}
              item={item}
              deleteItem={onDeleteItemButtonClick}
              key={item.id}
            />
          ) : null;
        })}
      </List>
      <Dialog open={open} close={handleClose} title={"Edit note"}>
        <TodoItemForm
          note={editNote}
          submit={submitNoteEdit}
          cancel={handleClose}
        />
      </Dialog>
    </Box>
  );
};

export default TodoList;
