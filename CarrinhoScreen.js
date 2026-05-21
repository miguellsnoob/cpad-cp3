import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho, total } = useCarrinho();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🛒 Meu Carrinho
      </Text>

      <FlatList
        data={carrinho}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              R$ {item.preco.toFixed(2)}
            </Text>
          </View>
        )}
      />

      <Text style={styles.total}>
        💰 Total: R$ {total.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: '600',
  },

  total: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});