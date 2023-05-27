import React, { useState } from "react";

import { Input, Box, Button } from "@mui/material";

const SearchPanel = (props) => {
  const { addItem } = props;

  const [inputValue, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onAddButtonClick = () => {
    addItem(inputValue);
    setInput("");
  };

  return (
    <Box sx={{}}>
      <Input placeholder="search" onChange={onInputChange} value={inputValue} />
      <Button onClick={onAddButtonClick}>Add</Button>
    </Box>
  );
};

export default SearchPanel;
