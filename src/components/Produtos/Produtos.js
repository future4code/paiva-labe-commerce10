import React from 'react';
import { ListaProdutos } from './ListaProdutos'
import styled from 'styled-components'

const ContainerProdutos = styled.div`

`
const HeaderProdutos = styled.div`
  display: flex;
  align-items: left;
  padding: 0 1rem;
`
const OrganizaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  `
export default class Produtos extends React.Component {
  state = {
    ordenar: 'decrescente'
  }
  ordenarProdutos = (event) => {
    this.setState({ ordenar: event.target.value })
  }
  ordenarListaFiltrada = () => {
    return this.props.produtos.sort((a, b) => this.state.ordenar === 'crescente' ? a.preco - b.preco : b.preco - a.preco)
  }

  render() {
    const ordenaListaFiltrada = this.ordenarListaFiltrada()
    return (
      <ContainerProdutos>
        <HeaderProdutos>
          <p>Mostrando: {ordenaListaFiltrada.length} Produtos</p>
          <label>
            <span>Ordenar por: </span>
            <select onChange={this.ordenarProdutos} value={this.state.ordenar}>
              <option value={'crescente'}>Crescente</option>
              <option value={'decrescente'}>Decrescente</option>
            </select>
          </label>
        </HeaderProdutos>
        <OrganizaProdutos>
          {ordenaListaFiltrada.map((produto) => {
            return (
              <ListaProdutos 
                produto={produto}
                addProdutoAoCarrinho={this.props.addProdutoAoCarrinho}
              />
            )
          })}
        </OrganizaProdutos>
      </ContainerProdutos>
    )
  }
}