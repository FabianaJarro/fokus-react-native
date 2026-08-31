import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container
      }
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: '#FFF'
  }
})


//o stylesheeet create recebe um objeto de configuração

// View: Funciona como uma <div> do HTML. É um container usado para agrupar, estruturar
// e aplicar layouts (usando Flexbox por padrão).

// Text: Funciona como um <p> ou <span> do HTML. Todo texto no React Native precisa
// obrigatoriamente estar dentro de um componente Text, caso contrário o app
// apresentará um erro
