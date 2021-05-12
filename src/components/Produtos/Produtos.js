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
  render() {
    return (
      <ContainerProdutos>
        <HeaderProdutos>
          <p>Mostrando: {QUANTIDADE DE PRODUTOS} Produtos</p>
          <label>
            <span>Ordenar por: </span>
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </HeaderProdutos>
        <OrganizaProdutos>
          <ListaProdutos />
        </OrganizaProdutos>

      </ContainerProdutos>
    )
  }
}