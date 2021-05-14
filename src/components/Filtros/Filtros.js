import React from 'react'
import ListaProdutos from ../Produtos/ListaProdutos
import styled from 'styled-components'


const FiltrosContainer = styled.div`
display: flex;
flex-direction: column;
grid-column: 1/2;
`



class Filtros extends React.Component {
    state = {
        minimo: '',
        maximo: '',
        buscaProduto: '',
        compras: [],
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

    onClickComprar = (produto) => {                    // TALVEZ ALGUÉM QUEIRA USAR ESTA FUNÇÃO
        console.log('clicou', produto)                 // QUEM ESTÁ FAZENDO O CARRINHO, PEGUE A LISTA
        this.state.compras.push(produto)               // DE COMPRAS NO ESTADO, CASO QUEIRA.
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

        return (

                <FiltrosContainer>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo</label>
                    <input type='Number' value={this.state.minimo} onChange={this.onChangeMinimo}></input>
                    <label>Valor Máximo</label>
                    <input type='Number' value={this.state.maximo} onChange={this.onChangeMaximo}></input>
                    <label>Buscar Produto</label>
                    <input value={this.state.buscaProduto} onChange={this.onChangeBusca}></input>
                </FiltrosContainer>
                
                <ListaProdutos estadosFiltro={state} produtos={produtos}/>  // EsTADOS E PRODUTOS PARA 
              									//ListaProduto
        )
    }
}

export default Filtros;

