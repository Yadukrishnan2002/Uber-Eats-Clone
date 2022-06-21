import { StyleSheet, Text, TouchableOpacity, View,Dimensions, Modal, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import {firebase,db} from '../../Firebase'
import { NavigationContainer } from '@react-navigation/native'
import LottieView from 'lottie-react-native';


const ViewCart = ({navigation}) => {


    const [modalVisible, setModalVisible] = useState(false)
    const [loading,setLoading] = useState(false)

    //Getting the items that the user selected
    const {items,restaurantName} = useSelector((state) => state.cartReducer.selectedItems)

    //Adding the price of items that the user selected
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
    console.log(totalUSD);



  const checkoutModalContent = () => {

    return(

       <>
        <View style = {styles.modalContainer}>
            <View style = {styles.modalCheckoutContainer}>
                <Text style = {styles.restaurantName}>{restaurantName}</Text>
                <ScrollView showsVerticalScrollIndicator = {false}>
                {
                    items.map((item,index) => (
                        <OrderItem key = {index} item = {item} />
                    ))
                }
                </ScrollView>
                <View style = {styles.subTotalContainer}>
                    <Text style = {styles.subTotalText}>Total</Text>
                    <Text style = {{fontWeight: 'bold',fontSize: 20}}>{totalUSD}</Text>
                </View>

                <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
                    <TouchableOpacity style = {{marginTop: 20,backgroundColor: 'black'
                ,padding: 13, borderRadius: 30, width: 300,
                position: 'relative',alignItems: 'center' }}
                
                onPress = {() => {
                    addOrderToFirebase()
                    setModalVisible(false);
                }}>

                        <Text style = {{color: 'white',fontSize: 20,fontWeight: 'bold'}}>Checkout</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
       </>
        
    )

  }

  // Adding orders to firebase
  const addOrderToFirebase = () => {
    setLoading(true)
    db.collection('orders').add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
        setTimeout(() => {
            setLoading(false)
            navigation.navigate("OrderCompleted");

        }, 2500);
    });
    
  }


  return (
    <>

    <Modal
    animationType='slide'
    visible = {modalVisible}
    transparent = {true}
    onRequestClose = {() => setModalVisible(false)}
    >

        {
            checkoutModalContent()
        }

    </Modal>

    {
        total ? (
            <View style = {{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: Dimensions.get('window').height - 100,
    
                position: 'absolute',
                zIndex: 999,
                
            }}>
                <View style = {{flexDirection: 'row',justifyContent: 'center',width: '100%'}}>
                    <TouchableOpacity style = {styles.Button} onPress = {() => setModalVisible(true)}>
                        <Text style = {{color: 'white',fontSize: 20,marginRight: 30,}}>View Cart</Text>
                        <Text style = {{color: 'white',fontSize: 20,}}>{totalUSD}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        ):(
            <></>
        )
    }

    {
        loading ? (
        <View style = {{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            
           
        }}>
                <LottieView 
                style = {{height: 200}}
                source = {require('../../assets/animations/scanner.json')}
                autoPlay 
                speed = {3}


                />

        </View>) : (<></>)
    }
        
    </>
  )
}

export default ViewCart

const styles = StyleSheet.create({
    Button: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
       
        borderRadius: 30,
        width: 300,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',

    },

    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,

    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subTotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 10,
    }, 
    
})