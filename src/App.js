import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        setCharacters(res.data)
      })
      .catch((err) => {
        setCharacters(null);
      });

  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;
