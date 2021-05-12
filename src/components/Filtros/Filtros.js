import React from 'react';
import styled from 'styled-components';


const CorpoFiltros = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
width: 25vw;
height: 95vh;
padding-left: 10px;
padding-right: 10px;
background-color: #001020;
color: #ddeeff;
padding: 1vw;
`

export class Filtros extends React.Component {

componentDidUpdate () {
}

onChangeInputMaximo () {
    console.log('funciona')
}


onClickBuscar = () => {
    console.log('buscou')
}





    render () {
        return (
    <CorpoFiltros>          
        <h1>Filtros</h1><br /><br />
            
        <p>Valor Máximo</p>
        <input type="number" 
            onChange={this.props.onChangeInputMaximo} /><br/>

        <p>Valor Mínimo</p>
        <input type="number" 
            onChange={this.props.onChangeInputMinimo}/><br />

        <p>Buscar Produto</p>
        <input type="text" />
        <button onClick={this.onClickBuscar}>Buscar</button>
    </CorpoFiltros>
)
}
}

export default Filtros;