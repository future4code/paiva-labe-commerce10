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
    produtosCarrinho: [
     {
    idProduto: 1,
    nomeProduto: 'Tênis Nike Lebron Witness V',
    valorProduto: 351,
    qntdCompra: 2,

  }
    ],

    teste: ""
  }

   verificarCompra = (id) => {



  }

  addProdutoAoCarrinho = (idProduto) => {
    
    let qntdCompra = 0
    let noCarrinho = false

    const compraMais = this.state.produtosCarrinho.map((carrinho) => {
      if(carrinho.idProduto === idProduto){
        noCarrinho = true
        const aumentarQntd = {...carrinho,qntdCompra: carrinho.qntdCompra + 1}
        console.log(carrinho.qntdCompra)
        return(aumentarQntd)
      }
    })

    if(noCarrinho){
      this.setState({produtosCarrinho: compraMais})
      console.log(this.state.produtosCarrinho)
    }else{

      const selecionarProduto = produtos.map((produto) =>{
        if(produto.id === idProduto){
          const novoProdutoCarrinho = {
            idProduto: produto.id,
            nomeProduto: produto.nome,
            valorProduto: produto.preco,
            qntdCompra:  1
          
          }
          return(novoProdutoCarrinho)
          console.log(novoProdutoCarrinho)
        }

        this.setState({produtosCarrinho: [...this.state.produtosCarrinho,selecionarProduto]})
        console.log(this.state.produtosCarrinho)
      })

    }
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
        />
        
      </ContainerAplicacao>
    )
  }
}

