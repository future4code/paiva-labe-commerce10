import React from 'react';
import Filtros from './components/Filtros/Filtros';
import Produtos from './components/Produtos/Produtos'
import Carrinho from './components/Carrinho/Carrinho';
import foto1 from './assets/image1.png'
import foto2 from './assets/image2.png'
import foto3 from './assets/image3.png'
// import foto4 from './assets/image4.png'
// import foto5 from './assets/image5.png'
// import foto6 from './assets/image6.png'
import styled from 'styled-components'

const ContainerAplicacao = styled.div`
  display: flex;
  justify-content: center;
`

//////////////////////////////////////////////////////////////////// LISTA PRODUTOS
const produtos = [
  {
    id: 1,
    nome: 'Tênis Nike Lebron Witness V',
    preco: 351,
    foto: foto1
  },
  {
    id: 2,
    nome: 'Tênis Nike Fly.By Mid 2',
    preco: 275,
    foto: foto2
  },
  {
    id: 3,
    nome: 'Tênis Nike Lebron Witness V',
    preco: 231,
    foto: foto3
  }
]

export default class App extends React.Component {
  state = {
    filtroMin: 0,
    filtroMax: 0,
    textoFiltro: "",
    produtosCarrinho: [
      {
        id: 3,
        nome: 'Tênis Nike Lebron Witness V',
        preco: 231,
        foto: foto3,
        qntdCompra: 3
      }
    ]
  }

  componentDidMount() {
    console.log(this.state.produtosCarrinho)
  }

  componentDidUpdate() {
    console.log(this.state.produtosCarrinho)
  }

  multiplicaValor = () => {

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
        <Filtros />
        <Produtos
          produtos={produtos}
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

