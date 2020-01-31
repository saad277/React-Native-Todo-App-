import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';





const TodoItem = ({ props, pressHandler }) => {





    return (

        <TouchableOpacity onPress={() => pressHandler(props.key)}>

            <View style={styles.item}>
                
                <MaterialIcons name="delete" size={18}/>
                <Text style={styles.itemText} >{props.name}</Text>
                
                </View>


        </TouchableOpacity>

    )






}

export default TodoItem;

const styles = StyleSheet.create({

    item: {

        padding: 12,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    
        fontSize: 13,
        flexDirection:"row",            //so icon and text can align  

    },
  
    itemText:{

        marginLeft:10,

    }



})