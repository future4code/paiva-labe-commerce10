import React from "react";
import {CarrinhoArea,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export class Carrinho extends React.Component{
    render(){
        return(
            <CarrinhoArea>
                <CarrinhoProduto>
                    <CarrinhoTexto>Quantidade Produto</CarrinhoTexto>
                    <CarrinhoTexto>Nome Produto</CarrinhoTexto>
                    <CarrinhoButton>Apagar Produto</CarrinhoButton>
                </CarrinhoProduto>
                <CarrinhoTexto>Total total:</CarrinhoTexto>
            </CarrinhoArea>            
        )
    }

    }
