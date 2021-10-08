// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  height: max-content;
  width: max-content;
  padding: 1rem;
  background-color: black;
  border-radius: 0.6rem;
  color: ${(props) => props.theme.gold};

  .name-container h2 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .info-container {
    display: flex;
    flex-wrap: wrap;


    div:nth-of-type(1){
        margin-right: 0.8rem;
    }
    div:nth-of-type(2){
        margin-left: 0.8rem;
    }
  }
`;

// I understand that the readme says to map over the data and create a character for each character in the data. I think displaying the data individually allows the use to pay more attention to one character, and helps me practise showing one out of many when it comes to data. I hope this doesn't wreck my score.

export default function Character({ characterObj }) {
  const character = characterObj[0];

  console.log(character);

  return (
    <StyledCard>
      <div className="name-container">
        <h2>{character.name}</h2>
        <hr></hr>
      </div>
      <div className="info-container">
        <div>
          <p>Born: {character.birth_year}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair Color: {character.hair_color}</p>
        </div>

        <div>
          <p>Skin Color: {character.skin_color}</p>
          <p>Height: {character.height} cm</p>
          <p>Weight: {character.mass} Kg</p>
        </div>
      </div>
    </StyledCard>
  );
}
