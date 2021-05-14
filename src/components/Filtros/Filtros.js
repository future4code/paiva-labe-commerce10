import React from "react";
import styled from "styled-components";

const CorpoFiltros = styled.div`
  display: flex;
  align-items: center;
  color: white;
  input {
    height: 1rem;
    margin: 0 0.5rem;
  }
  button {
      cursor: pointer;
  }
`;

export default class Filtros extends React.Component {
  componentDidUpdate() {}

  onChangeInputMaximo() {
    console.log("funciona");
  }

  onClickBuscar = () => {
    console.log("buscou");
  };

  render() {
    return (
      <CorpoFiltros>
        <label>Valor Máximo: </label>
        <input type="number" onChange={this.props.onChangeInputMaximo} />
        <label>Valor Mínimo: </label>
        <input type="number" onChange={this.props.onChangeInputMinimo} />
        <label>Buscar Produto </label>
        <input type="text" />
        <button onClick={this.onClickBuscar}>Buscar</button>
      </CorpoFiltros>
    );
  }
}