import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div> 
      <Typography variant="h5" component="h2" gutterBottom align="center">
        To-Do List
      </Typography>

      <div align="center">
        <TextField
          label="Add a to-do"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <div align="center">
        <IconButton color="primary" onClick={handleAddTodo}>
          <AddIcon style={{ color: "white", backgroundColor: "#7549BC" }} />
        </IconButton>
      </div>

      {todos.length > 0 ? (
        <List>
          {todos.map((todo, index) => (
            <ListItem style={{ textAlign: "center" }} key={index}>
              <ListItemText primary={todo} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" align="center">
          No to-dos added yet.
        </Typography>
      )}
    </div>
  );
}

export default App;
