import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'




const AddTodo = (props) => {

    const [todo, setTodo] = useState("");


    

    const changeHandler = (value) => {

        setTodo(value)

        

    }


    

   

    return (

        <View>
            <TextInput
                style={styles.input}
                placeholder="Add New Todo"
                onChangeText={changeHandler}

            ></TextInput>
            <Button title="Add Todo" color="green" style={styles.button} onPress={()=>props.addtodo(todo)}/>
        </View>


    )





}
export default AddTodo;

const styles = StyleSheet.create({


    input: {

        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"

    },
    button:{

            color:"green",
            backgroundColor:"green"

    }


})