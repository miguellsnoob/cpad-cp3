import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionar,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);