import React from "react";
import styled from "styled-components";
import { MdAddShoppingCart } from 'react-icons/md';
import { darken } from 'polished';

const Item = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #333;
    }

    button {
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#191920')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
export default class ListaProdutos extends React.Component {
  render() {
    const produto = this.props.produto;
    return (
      <Item>
        <li>
          <img src={produto.foto} alt={produto.nome} />
          <strong>{produto.nome}</strong>
          <span>R${produto.preco},00</span>
          <button type="button" onClick={this.props.addProdutoAoCarrinho}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>
            <span>COMPRAR</span>
          </button>
        </li>

      </Item>
    );
  }
}