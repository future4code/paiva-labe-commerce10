import React from "react";
import ListaProdutos from "./ListaProdutos";
import styled from "styled-components";

const ContainerProdutos = styled.div`
  color: white;
`;
const HeaderProdutos = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1rem;
  gap: 2rem;
  p {
    margin-left: auto;
    font-weight: 600;
    font-size: 0.8rem;
  }
  label {
    margin-left: auto;
    span {
      font-weight: bold;
    }
    select {
      border: none;
      cursor: pointer;
      user-select: none;
      outline: none;
      border-radius: 0.3rem;
      padding: 0.5rem;
      background: orange;
    }
  }
`;
const OrganizaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
`;

export default class Produtos extends React.Component {
  state = {
    ordenar: "decrescente"
  };

  ordenarProdutos = (event) => {
    this.setState({ ordenar: event.target.value });
  };

  ordenarListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => this.props.maximo ? produto.preco < this.props.maximo : true)
      .filter((produto) => this.props.minimo ? produto.preco > this.props.minimo : true)
      .filter((produto) => this.props.buscaProduto ? produto.nome.includes(this.props.buscaProduto) : true)
      .sort((a, b) =>
        this.state.ordenar === "crescente" ? a.preco - b.preco : b.preco - a.preco
      );
  };

  render() {
    const ordenaListaFiltrada = this.ordenarListaFiltrada();
    return (
      <ContainerProdutos>
        <HeaderProdutos>

          <label>
            <span>Ordenar por: </span>
            <select onChange={this.ordenarProdutos} value={this.state.ordenar}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
            <p>Mostrando: {ordenaListaFiltrada.length} Produtos</p>
          </label>
        </HeaderProdutos>
        <OrganizaProdutos>
          {ordenaListaFiltrada.map((produto) => {
            return (
              <ListaProdutos
                produto={produto}
                addProdutoAoCarrinho={() =>
                  this.props.addProdutoAoCarrinho(produto.id)
                }
              />
            );
          })}
        </OrganizaProdutos>
      </ContainerProdutos>
    );
  }
}
