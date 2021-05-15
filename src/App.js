import React from 'react';
import Header from './components/Header/Header';
import Filtros from './components/Filtros/Filtros';
import Carrinho from './components/Carrinho/Carrinho';
import Produtos from './components/Produtos/Produtos'
import GlobalStyles from './styles/global'
import foto1 from './assets/satelite1.jpg'
import foto2 from './assets/satelite2.jpg'
import foto3 from './assets/satelite3.jpg'
import foto4 from './assets/satelite4.jpg'
import foto5 from './assets/satelite5.jpg'
import foto6 from './assets/satelite6.jpg'
import styled from 'styled-components'

const ContainerAplicacao = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const produtos = [
  {
    id: 1,
    nome: "Sputnik",
    preco: 18000,
    foto: foto1
  },
  {
    id: 2,
    nome: "Telescópio Hubble",
    preco: 27500,
    foto: foto2
  },
  {
    id: 3,
    nome: "Mariner 9",
    preco: 23100,
    foto: foto3
  },
  {
    id: 4,
    nome: "Luna 10",
    preco: 89900,
    foto: foto4
  },
  {
    id: 5,
    nome: "Vostok 1",
    preco: 27500,
    foto: foto5
  },
  {
    id: 6,
    nome: "Death Star",
    preco: 649000,
    foto: foto6
  }
];

export default class App extends React.Component {
  state = {
    minimo: 0,
    maximo: 0,
    buscaProduto: "",
    produtosCarrinho: []
  }

  componentDidMount() {
    console.log(this.state.produtosCarrinho)
  }

  componentDidUpdate() {
    console.log(this.state.produtosCarrinho)
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

  apagarProduto = (idProduto) => {
    const taCarrinho = this.state.produtosCarrinho.find(produto => idProduto === produto.id)

    if (taCarrinho) {
      const novoProdutoCarrinho = this.state.produtosCarrinho.map(produto => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            qntdCompra: produto.qntdCompra - 1
          }
        }

        return produto
      }).filter((produto) => produto.qntdCompra > 0)
      this.setState({ produtosCarrinho: novoProdutoCarrinho })
    }


  }

  addProdutoAoCarrinho = (idProduto) => {
    const taCarrinho = this.state.produtosCarrinho.find(produto => idProduto === produto.id)

    if (taCarrinho) {
      const novoProdutoCarrinho = this.state.produtosCarrinho.map(produto => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            qntdCompra: produto.qntdCompra + 1,
          }
        }

        return produto
      })

      this.setState({ produtosCarrinho: novoProdutoCarrinho })
    } else {
      const novoProduto = produtos.find(produto => idProduto === produto.id)

      const novoProdutoCarrinho = [...this.state.produtosCarrinho,
      {
        ...novoProduto,
        qntdCompra: 1,
      }]

      this.setState({ produtosCarrinho: novoProdutoCarrinho })
    }
  }



  render() {

    return (
      <ContainerAplicacao>
        <GlobalStyles />
        <Header />
        <Filtros
          minimo={this.state.minimo}
          maximo={this.state.maximo}
          buscaProduto={this.state.buscaProduto}
          onChangeMinimo={this.onChangeMinimo}
          onChangeMaximo={this.onChangeMaximo}
          onChangeBusca={this.onChangeBusca}
        />
        <Produtos
          produtos={produtos}
          minimo={this.state.minimo}
          maximo={this.state.maximo}
          buscaProduto={this.state.buscaProduto}
          addProdutoAoCarrinho={this.addProdutoAoCarrinho}
        />
        <Carrinho
          carrinhoCompra={this.state.produtosCarrinho}
          apagarProduto={this.apagarProduto}
          multiplicaValor={this.multiplicaValor}
        />
      </ContainerAplicacao>
    )
  }
}

