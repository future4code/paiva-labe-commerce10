import React from "react";
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md';
import styled from "styled-components";

const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  padding: 1rem;
  color: white;
  div {
    display: flex;
    justify-content: center;
    text-align: right;
    margin-right: 10px;
    strong {
    }
  }
`;

export default function Header() {
  return (
    <div>
      <Cabecalho>
        <h1>LabeSatélites</h1>
        <div>
          <strong>Meu carrinho</strong>
          <Link to="/carrinho">
            <MdShoppingBasket size={36} color="#FFF" />
          </Link>
        </div>
      </Cabecalho>
    </div>
  );
}
