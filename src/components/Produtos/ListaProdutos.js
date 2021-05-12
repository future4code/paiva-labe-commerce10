import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
  border: 1px solid;
  border-radius: 1rem;
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
  cursor: pointer;
`

export class ListaProdutos extends React.Component {
  render() {
    const produto = this.props.produto
    return (
      <Item>
        <img src={produto.foto} />
        <InfoProduto>
          <p>{produto.nome}</p>
          <p>R${produto.preco},00</p>
        </InfoProduto>
        <AdicionaProduto onClick={() => this.props.addProdutoAoCarrinho(produto.id)}>
          Comprar
        </AdicionaProduto>
      </Item>
      
    )
  }
}