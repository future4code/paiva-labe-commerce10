import React from 'react';
import Styled from 'styled-components'

const Item = styled.div`
  
`
const InfoProduto = styled.div`

`

const AdicionaProduto = styled.button`

`

export class ListaProdutos extends React.Component {
  render() {
    return (
      <Item>
        <img src={} alt={} />
        <InfoProduto>
          <p>{NOME DO PRODUTO}</p>
          <p>{PREÇO DO PRODUTO}</p>
        </InfoProduto>
      </Item>
      
    )
  }
}