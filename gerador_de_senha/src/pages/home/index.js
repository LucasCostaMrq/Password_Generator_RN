import Slider from "@react-native-community/slider"
import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import { FrameModal } from "../../components/FrameModal"

let charComponents="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789"

export function Home(){
  const[size, setSize] = useState(10)
  const[passwordValue, setPasswordValue] = useState("")
  const[modalVisible, setModalVisible] = useState(false)
  //UseState => serve para dinamizar elementos dentro da aplicação; um estado
  //primeiro parâmetro (size): caixa que guarda o valor do useState
  //segundo parâmetro(setSize): ação que podemos chamar para trocar o valor do useState
  //useState(x): valor inicial do useState

  function generatePass(){

    let password = ""
    let charPosition = 0
    let newChar = ""

    for (let i = 0; i < size; i++){
      charPosition = Math.floor(Math.random() * charComponents.length)
      newChar = charComponents[charPosition]
      password += newChar
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return(
    //View consiste na tela visivel
    //configuração style serve para adicionar estilos
    //source e require para chegar no caminho da imagem dentro do projeto
    <View style={styles.container}>

      <Image source={require("../../assets/Logo.png")} style={styles.logo}></Image>
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider style={styles.slider} 
        minimumValue={6} 
        maximumValue={20}
        minimumTrackTintColor="darkred"
        maximumTrackTintColor="pink"
        thumbTintColor="red"
        //atribuindo o valor inicial do slider ao valor size do useState(10)
        value={size}
        onValueChange={ (value)=> setSize(value.toFixed(0))}
        //mudando o valor do slider com o movimento do ponto e atribuindo esse valor ao size por meio do setSize
        />    

      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <FrameModal password={passwordValue} handleClose={()=> setModalVisible(false)}/>
      </Modal>

    </View>
  )
  //onPress -> serve para definir uma ação de um botão clicado
  //TouchableOpacity => consiste numa ferramenta que cria uma opacidade no seu campo a partir do momento que é tocado (ótimo para fazer estilização de botões)
}

//criando uma estilização própria para cada componente
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
    alignItems: "center"
  },

  logo:{
    marginBottom: 30,
    width: 300,
    height: 300
  },

  area:{
    marginTop: 20,
    marginBottom: 15,
    width: "80%",
    backgroundColor: "ivory"
  },

  slider:{
    height:35,
  },

  button:{
    borderRadius: 8,
    width: "80%",
    marginTop: 15,
    height: 45,
    backgroundColor: "lightcoral",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  title:{
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  }
})
