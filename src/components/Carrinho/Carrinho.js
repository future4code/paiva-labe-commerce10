import React from "react";
import {CarrinhoArea,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{
    
    duplicarValor = () =>{

    }

    

 

    render(){
        const valorTotal = (qntd,valor) => {
            const carrinhoTotal = qntd * valor
            return  carrinhoTotal
        }

        const carrinho = this.props.carrinhoCompra.map((cart,index)=>{
            return(
                <CarrinhoProduto>
                    <CarrinhoTexto>x</CarrinhoTexto>
                    <CarrinhoTexto></CarrinhoTexto>
                    <CarrinhoTexto></CarrinhoTexto>
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
