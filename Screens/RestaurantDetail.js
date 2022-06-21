import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../Components/restaurantDetail/About'
import MenuItems from '../Components/restaurantDetail/MenuItems'
import ViewCart from '../Components/restaurantDetail/ViewCart'



const foods = [
  {
      title: "Lasagna",
      description: "With butter letuce, tomato and sauce bechamel",
      price: "$13.50",
      image: "https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800"
  },
  {
      title: "Tandoori Chicken",
      description: "Amazing Indian dish with tenderloin chicken off the sizzles",
      price: "$19.20",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
  },
  {
      title: "Chilaquiles",
      description: "Chilaqiles with cheese and sauce. A delicious mexican dish",
      price: "$14.50",
      image: "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg"
  },
  {
      title: "Chilaquiles",
      description: "Chilaqiles with cheese and sauce. A delicious mexican dish",
      price: "$14.50",
      image: "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg"
  },
  {
      title: "Chilaquiles",
      description: "Chilaqiles with cheese and sauce. A delicious mexican dish",
      price: "$14.50",
      image: "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg"
  },
  {
      title: "Chilaquiles",
      description: "Chilaqiles with cheese and sauce. A delicious mexican dish",
      price: "$14.50",
      image: "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg"
  },
  
  

]

const RestaurantDetail = ({navigation, route}) => {
  return (
    <View>
      <About route = {route} />
      <View style = {{borderBottomColor: "black", borderBottomWidth: 0.5,marginTop: 20,}} />
      <MenuItems restaurantName = {route.params.name} foods = {foods} />
      <ViewCart navigation = {navigation} restaurantName = {route.params.name}/>
    </View>
  )
}



export default RestaurantDetail

const styles = StyleSheet.create({})