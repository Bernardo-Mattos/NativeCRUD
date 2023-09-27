import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import * as React from 'react'


export default function Login() {

  return (
    <View style={styles.container}>
      <Text>login page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:  {
    flex :1,
    display: 'flex',
    justifyContent:'center',
    alignItems:"center",
  },

});