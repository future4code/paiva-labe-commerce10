import React from 'react';
import { Filtros } from './components/Filtros/Filtros';
import { Produtos } from './components/Produtos/Produtos';
import { Carrinho } from './components/Carrinho/Carrinho';
import styled from 'styled-components';

const ContainerAplicacao = styled.div`
`

const produtos = [
  {
    id: Date.now(),
    nome: 'Produto Teste',
    preco: 29.99,
    foto: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg'
  }

]

class App extends React.Component {
  state = {
    filtroMin: 0,
    filtroMax: 0,
    textoFiltro: "",
    produtosCarrinho: [
      {
        id: Date.now(),
        nome: 'Produto Teste',
        preco: 29.99,
        foto: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
        quantidade: 1
      }
    ]
  }

  render() {
    return (
      <ContainerAplicacao>
        <Filtros />
        <Produtos />
        <Carrinho />
      </ContainerAplicacao>
    )
  }
}

export default App;


