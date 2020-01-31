
import React, { useState } from 'react';

import { StyleSheet, Alert, View, Text, Button, TextInput, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons';


import Header from './components/header'

import TodoItem from './components/todoItem'

import AddTodo from './components/addTodo'

const App = () => {

  const [todo, setTodo] = useState([

    { name: "AWM", key: "1" },
    { name: "kar98", key: "2" },
    { name: "AUG", key: "3" },




  ])


  const pressHandler = (key) => {

    setTodo(

      todo.filter((todo) => {


        return todo.key != key;

      })

    )



  }

  const addTodo = (name) => {

    if (name.length > 0) {

      let new1 = { name: name, key: Math.random().toString() }

      

      setTodo([...todo, new1])

      

    }
    else {

      Alert.alert("Enter a todo")

    }




  }




  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>

        {/* header */}
        <Header />

        <View style={styles.content}>

          {/* TO DO FORM */}

          <AddTodo addtodo={addTodo} />
       

          <View styles={styles.list}>

            <FlatList
              data={todo}
              renderItem={({ item }) => {

                return (
                  <TodoItem props={item} pressHandler={pressHandler} />

                )

              }}

            ></FlatList>

          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>


  )



}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    flex:1,
    padding: 40,
    

  },
  list: {
    flex:1,
    marginTop: 20,
  

  },





});


export default App;