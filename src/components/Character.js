// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  height: 65vh;
  width: max-content;
  background-color: red;
`;

export default function Character({ characterObj }) {
    
    const character = characterObj[0]


  return (
    <StyledCard>
      <div className="name-container">{character.name}</div>
      <div className="image">{character.description}</div>
    </StyledCard>
  );
}
