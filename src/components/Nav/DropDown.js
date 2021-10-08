import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function DropDown({ names, setCurrentCharacter, characters }) {
  const handleNameChange = (e) => {
    const characterName = e.target.value;

    if (!(characterName === "Select Below")) {


      setCurrentCharacter(
        characters.filter((char) => char.name === characterName).flat()
      );
    }
  };

  return (
    <div>
      <label htmlFor="characters">Select a Character</label>
      <select onChange={handleNameChange} name="characters" id="characters">
        <option key="first">Select a Character</option>
        {names.map((name) => (
          <option key={name.slice(0, 3)} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
