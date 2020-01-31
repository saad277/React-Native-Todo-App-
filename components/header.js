import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'








const Header = () => {

    return (

        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>

    )





}

const styles = StyleSheet.create({

    header: {

    
        height:80,
        paddingTop:38,
        backgroundColor:"lightblue",
        
        

    },
    title:{

        color:"white",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"

    }


})


export default Header;