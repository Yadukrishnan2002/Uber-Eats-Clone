import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import HeaderTabs from '../Components/home/HeaderTabs'
import { SafeAreaView } from 'react-native'
import SearchBar from '../Components/home/SearchBar'
import Categories from '../Components/home/Categories'
import RestaurentItems from '../Components/home/RestaurentItems'
import { localRestaurent } from '../Components/home/RestaurentItems'
import NormalSearchBar from '../Components/home/NormalSearchBar'
import BottomTabs from '../Components/home/BottomTabs'


const YELP_API_KEY = "MrTzd03edlDkHCMPJbfeS0feBVB8inr8UTcVLYAaG1crdzkeeyF-1vJLbMUoUzv1vPuYwqcJQ2T9w7gtHtHtazm-7W6LKeKjC9LrdMXw5YqhZpJCnfpQtlLeYqCsYnYx"

const Home = ({navigation}) => {

    const [restaurentData,setRestaurentData] = useState([])
    const [city,setCity] = useState("NewYork")
    const [activeTab,setActiveTab] = useState("Delivery")
   

    const getRestaurentsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
   


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl,apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurentData(json.businesses.filter((business) => 
        business.transactions.includes(activeTab.toLowerCase())
        )))
    }

    useEffect(() => {
        getRestaurentsFromYelp()
    },[city,activeTab])

  return (
    <SafeAreaView style = {{backgroundColor: "#eee", flex: 1}}>
        <View style = {{backgroundColor:'white', padding: 15}}>
            <HeaderTabs activeTab = {activeTab} setActiveTab = {setActiveTab}/>
            <NormalSearchBar setCity = {setCity}/>
            

        </View>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <Categories />
           {restaurentData && <RestaurentItems restaurentData = {restaurentData} navigation = {navigation} /> }
        </ScrollView>

        <View style = {{borderBottomColor: "black", borderBottomWidth: 0.2}} />

        <BottomTabs />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})