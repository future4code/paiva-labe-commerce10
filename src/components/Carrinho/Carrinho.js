import React from "react";
import {CarrinhoArea,InputQntd,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{
    

    
    aumentarQntd = () => {

    }

     multiplicarValor = (qntd,valor) => {
        const carrinhoTotal = qntd * valor
        console.log(carrinhoTotal)
        return  carrinhoTotal
    }

    render(){


        const carrinho = this.props.carrinhoCompra.map((cart,index)=>{
            return(
                <CarrinhoProduto>
                    <CarrinhoTexto>{cart.qntdCompra}</CarrinhoTexto>
                    <CarrinhoButton onClick = {() => this.props.aumentarQntd(cart.id)}>+</CarrinhoButton>
                    <CarrinhoTexto>{cart.nome}</CarrinhoTexto>
                    <CarrinhoTexto>R${cart.precoTotal}</CarrinhoTexto>
                    <CarrinhoButton onClick = {() => this.props.apagarProduto(cart.id)}>
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
