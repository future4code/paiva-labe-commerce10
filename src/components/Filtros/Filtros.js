import React from 'react';
import Produtos from '../Produtos/Produtos';
import styled from 'styled-components';


const FiltrosContainer = styled.div`
display: flex;
flex-direction: column;
grid-column: 1/2;
`



export class Filtros extends React.Component {
    state = {
        minimo: '',
        maximo: '',
        buscaProduto: '',
    }

    onChangeMinimo = (event) => {
        this.setState({ minimo: event.target.value })
    }

    onChangeMaximo = (event) => {
        this.setState({ maximo: event.target.value })
    }

    onChangeBusca = (event) => {
        this.setState({ buscaProduto: event.target.value })
    }

//-----------------------------------------------------------
    componentDidUpdate() {
        console.log('update')
    }

  
    render() {
    //
        const produtos = this.props.produtos
        const inputMinusculo = this.state.buscaProduto.toLowerCase()

       
        const buscaNome = produtos.filter(produto => {
            let produtoNome = produto.nome.toLowerCase()
            return produtoNome.search(inputMinusculo) !== -1
        })

        const filtro = buscaNome.filter(produto => {
            if (((produto.value >= this.state.minimo) && (produto.value <= this.state.maximo)) ||
                ((produto.value >= this.state.minimo) && (this.state.maximo === '')) ||
                ((this.state.minimo === '') && (this.state.maximo === ''))) {
                return produto
            }
        })
	
	const produtos = filtro; // A lista filtrada
        
        return (
            <div>
                <FiltrosContainer>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo</label>
                    <input type='Number' value={this.state.minimo} onChange={this.onChangeMinimo}></input>
                    <label>Valor Máximo</label>
                    <input type='Number' value={this.state.maximo} onChange={this.onChangeMaximo}></input>
                    <label>Buscar Produto</label>
                    <input value={this.state.buscaProduto} onChange={this.onChangeBusca}></input>
                </FiltrosContainer>

                <Produtos produtos={produtos} />
            </div>
        )
    }
}

export default Filtros;

