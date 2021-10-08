import React, { useState, useEffect } from "react";
import axios from "axios";

import styled, { ThemeProvider } from "styled-components";

import Nav from "./components/Nav/Nav.js";
import Character from "./components/Character.js";

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const theme = {
  black: "black",
  gold: "#FFD740",
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

  // Helper funciton
  const createNamesArr = () => {
    const namesArr = characters.map((char) => char.name);
    return namesArr;
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Nav
          names={characters ? createNamesArr() : null}
          setCurrentCharacter={setCurrentCharacter}
          characters={characters ? characters : null}
        ></Nav>

        {currentCharacter && (
          <Character characterObj={currentCharacter}></Character>
        )}
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
