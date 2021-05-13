import React from "react";
import {CarrinhoArea,InputQntd,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{
    
    duplicarValor = () =>{

    }

    
    aumentarQntd = () => {

    }

 

    render(){
        const valorTotal = (qntd,valor) => {
            const carrinhoTotal = qntd * valor
            return  carrinhoTotal
        }

        const carrinho = this.props.carrinhoCompra.map((cart,index)=>{
            return(
                <CarrinhoProduto>
                    <InputQntd value = {cart.qntdCompra} />
                    <CarrinhoButton onClick = {() => this.props.aumentarQntd(cart.id)}>+</CarrinhoButton>
                    <CarrinhoTexto>{cart.nome}</CarrinhoTexto>
                    <CarrinhoTexto>{cart.preco}</CarrinhoTexto>
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
