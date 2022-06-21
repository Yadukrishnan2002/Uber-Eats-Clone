import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import {firebase,db} from '../Firebase'
import MenuItems from '../Components/restaurantDetail/MenuItems';


const OrderCompleted = () => {

    const {items,restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    const [LastOrder, setLastOrder] = useState({
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
          },
        ],
      });

      const [finalHeight,setFinalHeight]= useState(400)

    //Adding the price of items that the user selected
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  //Fetching the last order to display in the Checkout Screen
  useEffect(() => {
     const unsubscribe = db.collection("orders").orderBy('createdAt','desc').limit(1).onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
            setLastOrder(doc.data())
            
           
        }
        )
        
    })

    return () => unsubscribe();
    
    
  },[])

  useEffect(() => {
    console.log(LastOrder.items)
  },[LastOrder])


  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: 'white'}}>
        <View style = {{
            margin: 15,
            alignItems: 'center',
          
        }}>
        <LottieView 
        style = {{height: 100, alignSelf: 'center', marginBottom: 30}}
        source = {require('../assets/animations/check-mark.json')}
        autoPlay
        speed={1}
        loop = {false}
        />
      <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Your Order at {restaurantName} placed for {totalUSD} </Text>

        {LastOrder.length !=0 &&  <MenuItems  foods = {LastOrder.items} hideCheckbox = {true} finalHeight = {finalHeight} />  }

      <LottieView 
        style = {{height: 200, alignSelf: 'center',marginTop: -100,}}
        source = {require('../assets/animations/cooking.json')}
        autoPlay
        speed={1}
        loop = {true}
        />
    </View>
    </SafeAreaView>
  )
}

export default OrderCompleted

const styles = StyleSheet.create({})