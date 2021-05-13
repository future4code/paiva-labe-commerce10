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
    produtosCarrinho: [],
  }

  componentDidUpdate () {
    console.log(this.state.produtosCarrinho)
  }

  apagarProduto = (idProduto) => {
    const novoCarrinho = [...this.state.produtosCarrinho]

    const carrinhoFiltrado = novoCarrinho.filter((carrinho)=> {
      return carrinho.id !==idProduto
    })

    this.setState({produtosCarrinho: carrinhoFiltrado})
}

  aumentarQntd = (idProduto) => {
    const compraMais = this.state.produtosCarrinho.map((carrinho) => {
      if(carrinho.id === idProduto){
        const aumentarQntd = {...carrinho,qntdCompra: carrinho.qntdCompra + 1} //Aumenta a quantidade no carrinho em 1
        console.log('dentro de if carrinho',carrinho) 
        return aumentarQntd
      }else{
        return carrinho
      }
    })

    this.setState({produtosCarrinho: compraMais})
  }

  addProdutoAoCarrinho = (idProduto) => {
    const selecionarProduto = produtos.map((produto) =>{
      if(produto.id === idProduto){
          produto = {...produto, qntdCompra: 1}
          console.log(produto)
          this.setState({produtosCarrinho: [...this.state.produtosCarrinho,produto]})
    
        }
        
      })
    console.log('novo produto', this.state.produtosCarrinho)
  }


  render() {

    return (
      <ContainerAplicacao>
        <Filtros />
        <Produtos 
      produtos={produtos}
      addProdutoAoCarrinho = {this.addProdutoAoCarrinho}
      />
        <Carrinho
        carrinhoCompra = {this.state.produtosCarrinho}
        apagarProduto = {this.apagarProduto}
        aumentarQntd = {this.aumentarQntd}
        />
        
      </ContainerAplicacao>
    )
  }
}

