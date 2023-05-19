
import "./App.css";
import { useState } from "react";

function App() {
  const [carModelList, setCarModelList] = useState([]);

  const renderTableData = () => {
    return carModelList.map((val, index) => (
      <tr key={index}>
        <td>{val.brand}</td>
        <td>{val.model}</td>
        <td>{val.price}</td>
      </tr>
    ));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const brand = e.target.elements.brand.value;
    const model = e.target.elements.model.value;
    const price = e.target.elements.price.value;
    setCarModelList([...carModelList, { brand, model, price }]);
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <label className="form-label">Brand:</label>
            <input className="form-control" type="text" name="brand" />
          </div>

          <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <label className="form-label">Model:</label>
            <input className="form-control" type="text" name="model"/>
          </div>

          <div className="col-12 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <label className="form-label">Price:</label>
            <input className="form-control" type="text" name="price" />
          </div>
        </div>

        <div className="btnstyle mt-4">
          <button className="btn btn-primary" type="submit">
            Add Car Model
          </button>
        </div>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}

export default App;
