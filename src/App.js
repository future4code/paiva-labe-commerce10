import React from 'react';
import { Produtos } from './components/Produtos/Produtos'
import foto1 from './assets/image1.png'
import foto2 from './assets/image2.png'
import foto3 from './assets/image3.png'
import foto4 from './assets/image4.png'
import foto5 from './assets/image5.png'
import foto6 from './assets/image6.png'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const produtos = [
  {
    id: 1,
    nome: 'Tênis Nike Lebron Witness V',
    preco: 351,
    foto: { foto1 }
  },
  {
    id: 2,
    nome: 'Tênis Nike Fly.By Mid 2',
    preco: 275,
    foto: { foto2 }
  },
  {
    id: 1,
    nome: 'Tênis Nike Lebron Witness V',
    preco: 231,
    foto: { foto3 }
  }
]



export default class App extends React.Component {
  state = {

  }

  addProdutoAoCarrinho = (idProduto) => {

  }

  render() {
    return (
      <Container>
        <Produtos
          produtos={produtos}
        />
      </Container>
    );
  }
}