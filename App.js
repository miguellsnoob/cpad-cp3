import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

import { CarrinhoProvider } from './context/CarrinhoContext';

import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';

function Conteudo() {
  const [tela, setTela] = useState('produtos');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menu}>
        <Button
          title="Produtos"
          onPress={() => setTela('produtos')}
        />

        <Button
          title="Carrinho"
          onPress={() => setTela('carrinho')}
        />
      </View>

      {tela === 'produtos' ? (
        <ProdutosScreen />
      ) : (
        <CarrinhoScreen />
      )}
    </View>
  );
}

export default function App() {
  return (
    <CarrinhoProvider>
      <Conteudo />
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#ddd',
  },
});