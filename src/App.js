import React, { useState, useEffect } from "react";
import axios from "axios";

import { ThemeProvider } from "styled-components";

import Nav from "./components/Nav/Nav.js";
import Character from "./components/Character.js";

const theme = {
  black: "black",
};

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        setCharacters(null);
      });
  }, []);

  const createNamesArr = () => {
    const namesArr = characters.map((char) => char.name);
    return namesArr;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav
          names={characters ? createNamesArr() : null}
          setCurrentCharacter={setCurrentCharacter}
          characters={characters ? characters : null}
        ></Nav>

        {currentCharacter && <Character characterObj={currentCharacter}></Character>}
      </div>
    </ThemeProvider>
  );
};

export default App;
