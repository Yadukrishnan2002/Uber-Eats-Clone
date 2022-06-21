import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const NormalSearchBar = ({setCity}) => {

    const [Var,setVar] = useState()
  return (
    <View style = {{marginTop: 15,flexDirection: 'row',backgroundColor: "#eee",
    borderRadius: 20,
    alignItems: 'center'}}>
       <View style = {{marginLeft: 10}}>
            <Ionicons name = "location-sharp" size = {24} />
        </View>

      <TextInput  
      placeholder='Search for a location'
      placeholderTextColor={'grey'}
      style = {{
            fontWeight: '700',
            marginTop: 7,
            padding: 12
      }}

      value = {Var}
      onChangeText = {(Var) => setCity(Var)}

      />
    </View>
  )
}

export default NormalSearchBar

const styles = StyleSheet.create({})