import React from "react"
import { CarrinhoArea, CarrinhoButton, CarrinhoProduto, CarrinhoTexto } from './styled'

export default class Carrinho extends React.Component {



    multiplicarValor = (qntd, valor) => {
        const carrinhoTotal = qntd * valor
        console.log(carrinhoTotal)
        return carrinhoTotal
    }


    valorTotal = () => {
        const carrinho = this.props.carrinhoCompra
        let valorTotal = 0

        for (let produto of carrinho) {
            valorTotal += produto.preco * produto.qntdCompra
        }
        return valorTotal

    }
    render() {

        const carrinho = this.props.carrinhoCompra.map((cart, index) => {
            return (
                <CarrinhoProduto>
                    <CarrinhoTexto>{cart.qntdCompra}</CarrinhoTexto>
                    <CarrinhoTexto>{cart.nome}</CarrinhoTexto>
                    <CarrinhoTexto>R${this.multiplicarValor(cart.qntdCompra, cart.preco)}</CarrinhoTexto>
                    <CarrinhoButton onClick={() => this.props.apagarProduto(cart.id)}>
                        Apagar Produto
                    </CarrinhoButton>

                </CarrinhoProduto>
            )
        })

        return (
            <CarrinhoArea>
                {carrinho}
                <CarrinhoTexto>Total: R${this.valorTotal()},00 </CarrinhoTexto>

            </CarrinhoArea>
        )
    }

}

    
