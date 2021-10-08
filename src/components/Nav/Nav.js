import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown.js";

const StyledNav = styled.div`
  height: max-content;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;

  div {
    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export default function Nav({ names, setCurrentCharacter, characters }) {
  return (
    <StyledNav>
      <div>
        <p>Star Wars Character Viewer</p>
      </div>
      {names && (
        <DropDown
          names={names}
          setCurrentCharacter={setCurrentCharacter}
          characters={characters}
        />
      )}
    </StyledNav>
  );
}
