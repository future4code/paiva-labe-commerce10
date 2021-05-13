import React from "react";
import {CarrinhoArea,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{

    state = {
        x:0
    }

    
    duplicarValor = () =>{

    }

    




    apagarProduto = () => {
        const x2 = this.state.x
        const cart = this.props.carrinhoCompra
        console.log(cart)
        this.setState({x:1})
        console.log(x2)
    }

    render(){
        const valorTotal = (qntd,valor) => {
            const carrinhoTotal = qntd * valor
            return  carrinhoTotal
        }

        const carrinho = this.props.carrinhoCompra.map((cart,index)=>{
            
            return(
                <CarrinhoProduto>
                    <CarrinhoTexto>{cart.qntdCompra}x</CarrinhoTexto>
                    <CarrinhoTexto>{cart.nome}</CarrinhoTexto>
                    <CarrinhoTexto>{cart.preco}</CarrinhoTexto>
                    <CarrinhoButton onClick = {this.apagarProduto}>
                        Apagar Produto
                    </CarrinhoButton>

                </CarrinhoProduto>
            )
        })

            return(
                <CarrinhoArea>
                    {carrinho}
                    <CarrinhoTexto>Total total: R$</CarrinhoTexto>

                </CarrinhoArea>            
            )            
    }

    }
