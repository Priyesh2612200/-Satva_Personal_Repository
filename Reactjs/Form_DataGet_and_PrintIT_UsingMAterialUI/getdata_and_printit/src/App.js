
import "./App.css";
import { useState } from "react";
import { Container, Grid, TextField, Button, Table, TableHead, TableBody, TableRow, TableCell,} from '@material-ui/core';


const YourComponent = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [carModels, setCarModels] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

   
    const newCarModel = { brand, model, price };
    setCarModels([...carModels, newCarModel]);

  
    setBrand('');
    setModel('');
    setPrice('');
  };

  const renderTableData = () => {
    return carModels.map((carModel, index) => (
      <TableRow key={index}>
        <TableCell>{carModel.brand}</TableCell>
        <TableCell>{carModel.model}</TableCell>
        <TableCell>{carModel.price}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} >
          <Grid item xs={4}>
            <TextField
              label="Brand"
              // variant="outlined"
              fullWidth
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Model"
              // variant="outlined"
              fullWidth
              value={model}
              onChange={(event) => setModel(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Price"
              // variant="outlined"
              fullWidth
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" fullWidth className="mt-3">
          Add Car Model
        </Button>
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableData()}</TableBody>
      </Table>
    </Container>
  );
};

export default YourComponent;
