import { Image, StyleSheet, Text, View, Pressable} from "react-native";

export default function Index() {
  return (
    <View
    style={styles.container}
    >
    <Image source={require('./pomodoro.png')}/> 

    <View style={styles.actions}>
      <Text style={styles.timer}>
        25:00
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Começar
        </Text>
      </Pressable>
    </View>

    <View styles={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais. Desenvolvido por Alura.
      </Text>
    </View>

    

    </View>
  );
}

//pressable é um tipo view

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#021123",
    gap:80
  },

  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor:"#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,

  },

  timer:{
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  button: {
  backgroundColor: '#B872FF',
  borderRadius:32,
  padding: 10
  },

  buttonText:{
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  },

  footer: {
    width: '80%',
  },

  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
}




})


//o stylesheeet create recebe um objeto de configuração

// View: Funciona como uma <div> do HTML. É um container usado para agrupar, estruturar
// e aplicar layouts (usando Flexbox por padrão).

// Text: Funciona como um <p> ou <span> do HTML. Todo texto no React Native precisa
// obrigatoriamente estar dentro de um componente Text, caso contrário o app
// apresentará um erro
