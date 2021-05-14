import React from 'react'
import Produtos from './components/Produtos/Produtos'
import Carrinho from './components/Carrinho/Carrinho'
import { Switch, Route } from 'react-router-dom'
export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => (
        <Produtos
          produtos={produtos}
          addProdutoAoCarrinho={this.addProdutoAoCarrinho}
        />
      )} />
      <Route path="carrinho" component={Carrinho} />
    </Switch>
  )
}