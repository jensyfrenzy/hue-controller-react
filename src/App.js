import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container } from "@material-ui/core";

function App() {
  const [lights, setLights] = useState([]);

  // api token
  const username = "";

  //hub ip address
  const ip = "192.168.1.1";
  const url = `http://${ip}/api/${username}`;

  useEffect(() => {
    axios
      .get(`${url}/lights`)
      .then((res) => {
        const foundLights = Object.keys(res.data).map((key) => {
          let light = res.data[key];
          light.id = key;
          return light;
        });
        setLights(foundLights);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Hue Controller</h1>
    </div>
  );
}

export default App;
