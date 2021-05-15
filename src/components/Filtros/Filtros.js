import React from 'react';
import styled from 'styled-components';


const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  color: white;
  input {
    width: 15rem;
  }
`;



export class Filtros extends React.Component {



    render() {
        return (
            <div>
                <FiltrosContainer>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo</label>
                    <input
                        type="range"
                        min="0"
                        max="649001"
                        value={this.props.minimo}
                        onChange={this.props.onChangeMinimo}
                    ></input>
                    <label>Valor Máximo</label>
                    <input
                        type="range"
                        min="0"
                        max="649001"
                        value={this.props.maximo}
                        onChange={this.props.onChangeMaximo}
                    ></input>
                        <label>Buscar Produto</label>
                        <input value={this.props.buscaProduto} onChange={this.props.onChangeBusca}></input>
                </FiltrosContainer>
            </div>
        )
    }
}

export default Filtros;

