import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://i.pravatar.cc/300',
        }}
        style={styles.foto}
      />

      <Text style={styles.nome}>
        Miguel Lima da Silva
      </Text>

      <Text style={styles.curso}>
        ADS • FIAP • 1º Ano
      </Text>

      <Text style={styles.frase}>
        "Tecnologia e criatividade mudam o mundo."
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>LinkedIn</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  foto: {
    width: 170,
    height: 170,
    borderRadius: 999,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#38BDF8',
  },

  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  curso: {
    fontSize: 17,
    color: '#CBD5E1',
    marginBottom: 20,
  },

  frase: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 35,
    fontStyle: 'italic',
    paddingHorizontal: 15,
  },

  botao: {
    backgroundColor: '#38BDF8',
    width: '85%',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});