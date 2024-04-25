import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../componets/modal';

let charset = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function Home(){
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalViible] = useState(false)

  function generatePassword() {
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalViible(true)
  }

  return (
    <View style={styles.container}>
      <Image
       source={require("../../assets/logo.png")}
       style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

     <View style={styles.area}>
      <Slider
       style={{ height: 50 }}
       minimumValue={6}
       maximumValue={20}
       maximumTrackTintColor='#000'
       minimumTrackTintColor='#392de9'
       thumbTintColor='#392de9'
       value={size}
       onValueChange={ (value) => setSize(parseInt(value))}
      />
     </View>

     <TouchableOpacity style={styles.btn} onPress={generatePassword}>
       <Text style={styles.btnText}>Gerar acesso</Text>
     </TouchableOpacity>
     

     <Modal visible={modalVisible} animationType='fade' transparent={true}>
       <ModalPassword password={passwordValue} handleClose={ () => setModalViible(false)}/>
     </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6
  },
  btn: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  btnText: {
    color: "#fff",
    fontSize: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '900'
  }
});