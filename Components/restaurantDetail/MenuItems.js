import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const MenuItems = ({restaurantName,foods,hideCheckbox,marginLeft,finalHeight}) => {

    const dispatch = useDispatch();

    const selectItem = (item,checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload: {...item,restaurantName: restaurantName,
         checkboxValue: checkboxValue},
    })


    const cartItems = useSelector(state => state.cartReducer.selectedItems.items)

    const isFoodInCart = (food,cartItems) => (
        Boolean(cartItems.find((item) => item.title === food.title))
    );

  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{...styles.container, height: finalHeight ? finalHeight : 620}}>
    {
        foods.map((item,index) => (

        <View key = {index}>
            <View style = {styles.menuItemStyle}>
                { hideCheckbox ? (<></>) : (<BouncyCheckbox 
                iconStyle={{borderColor: "lightgrey",borderRadius: 0,}}
                fillColor = "green"
                onPress={(checkboxValue) => selectItem(item,checkboxValue)}
                isChecked = {isFoodInCart(item,cartItems)}
                />)}
                <FoodInfo food = {item} />
                <FoodImage food = {item} marginLeft = {marginLeft ? marginLeft : 0} />
                
            </View>
           
          

        </View>
        
        
         ))
         
    }
    </ScrollView>
    
  )
}





const FoodInfo = (props) => (
    <View style = {{
        width: 240,
        justifyContent: 'space-evenly'
    }}>
        <Text style ={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = ({marginLeft,...props}) => (
    <View>
        <Image source = {{uri: props.food.image}} 
        style = {{width: 100, height: 100, borderRadius: 8,marginLeft: marginLeft}} />
    </View>
)

export default MenuItems



//Redux




const styles = StyleSheet.create({
    container: {
      marginBottom: 300,
      
       
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        borderBottomColor: "black",
        borderBottomWidth: 0.2,
       
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '500'
    },
})