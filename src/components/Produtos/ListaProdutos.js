import React from "react";
import styled from "styled-components";

const Item = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  &:hover {
    border: 0.5px solid lightgray;
  }
  img {
    border-radius: 1rem;
    padding: 0.2rem;
  }
`;
const InfoProduto = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  p {
    color: lightblue;
    margin: 0.25rem;
  }
  span {
    p {
      color: black;
      text-align: center;
    }
  }
`;

const AdicionaProduto = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;
  align-self: center;
  width: 50%;
`;

export default class ListaProdutos extends React.Component {
  render() {
    const produto = this.props.produto;
    return (
      <Item>
        <img src={produto.foto} />
        <InfoProduto>
          <p>{produto.nome}</p>
          <p>R${produto.preco},00</p>
        </InfoProduto>
        <AdicionaProduto onClick={this.props.addProdutoAoCarrinho}>
          Comprar
        </AdicionaProduto>
      </Item>
    );
  }
}
