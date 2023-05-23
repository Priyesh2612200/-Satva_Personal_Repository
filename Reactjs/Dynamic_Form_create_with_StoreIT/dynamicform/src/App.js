import React, { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

import {
  TextField,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Container,
  Paper,
  TableContainer,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import btnLinkimg from '../src/Images/bg.jpg';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: "" }]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);

  };

  const handleAddField = () => {
    const values = [...fields];
    values.push({ value: "" });
    setFields(values);

  };

    // const handleAddField = () => {
  //   const values = [...fields];
  //   setFields([...fields,{ value: "" }])
  //   // values.push({ value: "" });
  //   setFields(values);
  // };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasFilledField = fields.some((field) => field.value.trim() !== "");
    if (!hasFilledField) {
      alert("Please add at least one field before submitting.");
      return;
    }
    
    setSubmitted(true);
    // setFields([{ value: "" }]);

    event.target.reset();
   
  };

  return (

    <div className="img">
    <Container>
      {/* <img src={btnLinkimg}></img> */}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          {fields.map((field, index) => (
            <Grid key={index} container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  style={{ marginTop: "15px" }}
                  label={`Field ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  value={field.value}
                  onChange={(e) => handleChange(index, e)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{ textAlign: "center" }}
                className="justify-content-center"
              >
                <Button
                  style={{ marginTop: "15px"}}
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveField(index)}
                >
                  DELETE Field
                </Button>
                
              </Grid>
            </Grid>
          ))}

          <Grid container>
            <Grid
              item
              xs={6}
              style={{ textAlign: "center" }}
              className="justify-content-center"
            >
              <Button
                style={{ marginTop: "15px", width: "98%" }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={handleAddField}
              >
                Add Field
              </Button>
            </Grid>

            <Grid
              item
              xs={6}
              style={{ textAlign: "center" }}
              className="justify-content-center"
            >
              <Button
                style={{ marginTop: "15px", width: "98%" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>

          {fields.length === 0 && (
            <FormControl error>
              <FormHelperText>At least one field is required</FormHelperText>
            </FormControl>
          )}
        </FormGroup>
      </form>

      {submitted && fields.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: "15px" }}>
          <Table>
            <TableHead>
              {fields.map((_, index) => (
                <TableRow>
                  <TableCell key={index}>
                    <span style={{ fontWeight: "bold" }}>
                     
                      Field {index + 1} value : 
                    </span>
                    <span style={{color:"green",fontWeight: "bold" }}> {_.value} </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableHead>
          </Table>
        </TableContainer>
      )}
    </Container>
    </div>
  );
};

export default DynamicForm;
