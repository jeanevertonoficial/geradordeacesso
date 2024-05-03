// atalho para criar component: rnf
// item clicavel: Pressable
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export function PasswordItem({data, removePassword}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={ styles.text }>{data}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#392de9",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
   },
   text: {
    color: "#FFF",
    fontWeight: "bold",
   }
})