import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  img {
    
  }
`
const InfoProduto = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  p {
    margin: 0.25rem 0;
  }
`

const AdicionaProduto = styled.button`
  border: none;

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
        <AdicionaProduto onClick={() => this.props.addProdutoAoCarrinho(produto.id)}>
          Comprar
        </AdicionaProduto>
      </Item>
      
    )
  }
}