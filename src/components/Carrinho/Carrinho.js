import React from "react";
import {CarrinhoArea,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{

    
    duplicarValor = () =>{

    }

    valorTotal = () => {

    }

    apagarProduto = () => {
        const cart = this.props.carrinhoCompra
        console.log(cart)
    }

    render(){

        const carrinho = this.props.carrinhoCompra.map((cart,index)=>{
            return(
                <CarrinhoProduto>
                    <CarrinhoTexto>{cart.qntdCompra}x</CarrinhoTexto>
                    <CarrinhoTexto>{cart.nomeProduto}</CarrinhoTexto>
                    <CarrinhoTexto>R${cart.valorProduto}</CarrinhoTexto>
                    <CarrinhoButton onClick = {this.apagarProduto}>
                        Apagar Produto
                    </CarrinhoButton>

                </CarrinhoProduto>
            )
        })

            return(
                <CarrinhoArea>
                    {carrinho}
                    <CarrinhoTexto>Total total: {this.valorTotal}</CarrinhoTexto>

                </CarrinhoArea>            
            )            
    }

    }
