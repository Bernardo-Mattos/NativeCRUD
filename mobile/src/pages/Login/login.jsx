import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Login page bitch</Text>
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