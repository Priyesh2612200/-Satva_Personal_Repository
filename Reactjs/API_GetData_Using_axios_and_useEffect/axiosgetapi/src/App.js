import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resData, setResData] = useState([]);

  // const [recallApi, setRecallApi] = useState("init value")

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setResData(response);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  //   setTimeout(() => {
  //   setRecallApi("changeed value")
  // }, 10000);

  useEffect(() => {
    console.log("App is Loading....");
    fetchData();
  }, []);
  // }, [recallApi]);

  return (
    <>
      <div
        className="App"
        style={{ background: "black", minHeight: "100vh", minWidth: "100vw" }}
      >
        <div className="container-fluid">
          <div className="row">
            {resData?.data?.map((data, index) => (
              <>
                <div
                  key={index}
                  className="col-12 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
                >
                  <div
                    style={{
                      background: "#5d56564a",
                      boxShadow: "rgb(160 147 147 / 25%) -3px 4px 8px",
                    }}
                  >
                    <div>
                      <h4 style={{ color: "#efe70e" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          ID :
                        </span>
                        <span
                          style={{ width: "50px", display: "inline-block" }}
                        >
                          {data?.id}
                        </span>
                      </h4>
                    </div>

                    <div>
                      <p style={{ color: "white" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Name :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.name}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "white" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Username :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.username}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "white" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Email :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.email}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Street :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.street}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Suite :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.suite}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          City :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.city}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Zipcode :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.zipcode}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Lat :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.geo.lat}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "lightpink" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Lng :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.address.geo.lng}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "white" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Phone :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.phone}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "white" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Website :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.website}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "#3D91A0" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Name :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.company.name}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "#3D91A0" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          catchPhrase :
                        </span>
                        <span
                          style={{ width: "330px", display: "inline-block" }}
                        >
                          {data?.company.catchPhrase}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p style={{ color: "#3D91A0" }}>
                        <span
                          style={{ width: "100px", display: "inline-block" }}
                        >
                          Bs :
                        </span>
                        <span
                          style={{ width: "200px", display: "inline-block" }}
                        >
                          {data?.company.bs}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
