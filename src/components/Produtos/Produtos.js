import React from 'react';
import { ListaProdutos } from './ListaProdutos'
import Styled from 'styled-components'

const ContainerProdutos = styled.div`
  
`
const HeaderProdutos = styled.div`

`
const OrganizaProdutos = styled.div`

`


export default class Produtos extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        <HeaderProdutos>
          <p>Mostrando: {QUANTIDADE DE PRODUTOS} Produtos</p>
          <label>
            <span>Ordenar: </span>
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