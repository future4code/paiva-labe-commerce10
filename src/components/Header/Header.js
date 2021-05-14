import React from "react";
import styled from "styled-components";

const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: white;
`;

export default function Header() {
  return (
    <Cabecalho>
      <h1>LabeShoes</h1>
    </Cabecalho>
  );
}
