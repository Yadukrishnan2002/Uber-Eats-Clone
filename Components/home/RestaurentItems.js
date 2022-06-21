import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurentItems = ({navigation, ...props}) => {
  return (
    <>
        {
         
                props.restaurentData.map((item,index) => (
                    <TouchableOpacity activeOpacity={1} style = {{marginBottom: 30}} key = {index} 
                    onPress = {() => navigation.navigate("RestaurantDetail",{
                        name: item.name,
                        image: item.image_url,
                        price: item.price,
                        reviews: item.review_count,
                        rating: item.rating,
                        categories: item.categories,
                    })}>
                        <View style = {{marginTop: 10,padding: 15,backgroundColor: 'white'}} >
                            <RestaurentImage image = {item.image_url}/>
                            <RestaurentInfo name = {item.name} rating = {item.rating} />
                        </View>
                    </TouchableOpacity>
                ))
           
        }
  
    </>
  )
}

const RestaurentImage = (props) => (
   <>
        <Image source = {{uri: props.image}}
        style = {{width: "100%", height: 180}} />

        <TouchableOpacity style = {{position: 'absolute', right: 20, top: 20,}}>
            <MaterialCommunityIcons name = "heart-outline" size = {25} color = "#ffff" />
        </TouchableOpacity>
   </>
    
)

const RestaurentInfo = (props) => (
    <View style = {{flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginTop: 10,}}>
        <View>
            <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style = {{fontSize: 13, color: 'grey'}}>30-45 • min</Text>
        </View>

        <View style = {{backgroundColor: '#eee',height: 30,width: 30, alignItems: 'center',
        borderRadius: 15, justifyContent: 'center'}}>
            <Text>{props.rating}</Text>
        </View>

        

    </View>
)

export const localRestaurent = [
    {
        name: "Indian Grills",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
        categories: ['Cafe','Bar'],
        price: "$$",
        rating: 4.5,
    },
    {
        name: "Farmhouse Kitchen",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/04/ad/a4/26/choola-restaurant.jpg",
        categories: ['Cafe','Bar'],
        price: "$$",
        rating: 4.2,
    },
]

export default RestaurentItems

const styles = StyleSheet.create({})