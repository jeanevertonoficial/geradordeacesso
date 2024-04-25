import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';

export function Passwords(){
    const [listaPassword, setListPassword] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage()

    useEffect(() => {
     async function loadPasswords() {
      const passwods = await getItem("@pass");       
      setListPassword(passwods)
    }
     loadPasswords();
    }, [focused])
    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={styles.header}>
              <Text style={styles.title}>Minha Senhas</Text>
            </View>

            <View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingBottom: 14,
        paddingTop:58,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: '#fff'
    }
})