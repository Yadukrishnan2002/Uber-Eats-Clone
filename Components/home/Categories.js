import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const Categories = () => {
  return (
    <View style = {{marginTop: 5, backgroundColor: 'white', paddingVertical: 10,}}>
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
            {
                items.map((item,index) => (
                    <View style = {{alignItems: 'center',marginRight: 30, paddingLeft: 20}} key = {index}>
                        <Image source={item.image} style = {{width: 45, height: 45, resizeMode: "contain"}} />
                        <Text style = {{fontSize: 13,fontWeight: '900'}}>{item.text}</Text>
                    </View>  
                ))
            }
            
            
        </ScrollView>
    </View>
  )
}


const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-Up',
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: 'Fast Foods',
    },
    {
        image: require('../../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: 'Coffee & Tea',
    },
]

export default Categories

const styles = StyleSheet.create({})