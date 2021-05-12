import React from "react";
import {CarrinhoArea,CarrinhoButton,CarrinhoProduto,CarrinhoTexto} from './styled'

export default class Carrinho extends React.Component{

    state = {
        compra:[
            {idCompra: Date.now(), qntdCompra = 2, nomeProduto = "Tenis", valorProduto = 10}
        ]
    }

    duplicarValor = () =>{

    }

    valorTotal = () => {

    }

    apagarProduto = () => {

    }

    render(){
        return(
            <CarrinhoArea>
                <CarrinhoProduto>
                    <CarrinhoTexto>{this.props.qntProduto}</CarrinhoTexto>
                    <CarrinhoTexto>{this.props.nomeProduto}</CarrinhoTexto>
                    <CarrinhoButton onClick = {this.props.btnApagar}>Apagar Produto</CarrinhoButton>
                </CarrinhoProduto>
                <CarrinhoTexto>Total total: {this.valorTotal}</CarrinhoTexto>
            </CarrinhoArea>            
        )
    }

    }
