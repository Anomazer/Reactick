import React, { useState, useEffect } from "react";

import { Input, Box, Button } from "@mui/material";

const TodoItemForm = (props) => {
  const { note, submit, cancel } = props;

  const [noteTitle, setNoteTitle] = useState("");

  useEffect(() => {
    if (note) {
      setNoteTitle(note.title);
    }
  }, [note]);

  const submitTodoItem = (e) => {
    e.preventDefault();
    submit(noteTitle);
    setNoteTitle("");
  };

  const onChangeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  return (
    <form onSubmit={submitTodoItem}>
      <Input
        value={noteTitle}
        onChange={onChangeNoteTitle}
        placeholder={"Edit note title"}
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button onClick={cancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={submitTodoItem} color="success">
          Confirm
        </Button>
      </Box>
    </form>
  );
};

export default TodoItemForm;
