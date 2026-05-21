import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);

  useEffect(() => {
    if (copos >= 8) {
      setMeta(true);
    } else {
      setMeta(false);
    }
  }, [copos]);

  function adicionarCopo() {
    setCopos(copos + 1);
  }

  function resetarCopos() {
    setCopos(0);
  }

  return (
    <View
      style={[
        styles.container,
        meta && styles.containerMeta
      ]}
    >

      <Text style={styles.titulo}>
        💧 Contador de Hidratação
      </Text>

      <Text style={styles.contador}>
        {copos} copos
      </Text>

      <Text style={styles.emojis}>
        {'🥤'.repeat(copos)}
      </Text>

      {meta && (
        <Text style={styles.metaTexto}>
          🏆 Meta do dia atingida!
        </Text>
      )}

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarCopo}
      >
        <Text style={styles.textoBotao}>
          + Adicionar Copo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoResetar}
        onPress={resetarCopos}
      >
        <Text style={styles.textoBotao}>
          Resetar
        </Text>
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

  containerMeta: {
    backgroundColor: '#14532D',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
  },

  contador: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginBottom: 20,
  },

  emojis: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },

  metaTexto: {
    fontSize: 24,
    color: '#FACC15',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  botaoAdicionar: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },

  botaoResetar: {
    backgroundColor: '#EF4444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});