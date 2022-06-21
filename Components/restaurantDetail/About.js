import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const About = (props) => {

   
    
    const {name,image,price, reviews, rating,categories} = props.route.params
    
    const formattedCategores = categories.map((cat) => cat.title).join(' · ')
    
    const description = `${formattedCategores} ${price ? ' · ' + price : ""} · 🎫 · ${rating} ⭐️  (${reviews}+)` 

  return (
    <View>
      <RestaurantImage image = {image} />
      <RestaurantTitle title = {name} />
      <RestaurantDescription description = {description} />
    </View>
  )
}




const RestaurantImage = (props) => (
    <Image source = {{uri: props.image}} style = {{width: '100%', height: 180}} />
)

const RestaurantTitle = (props) => (
    <Text style = {{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.title}</Text>
)

const RestaurantDescription = (props) => (
    <Text style ={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>{props.description}</Text>
)

export default About

const styles = StyleSheet.create({})