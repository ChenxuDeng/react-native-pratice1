import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList} from 'react-native';
import List from "./components/list/list";
import UserInput from "./components/userInput/userInput";

export default function App() {

    const styles = StyleSheet.create({
        screen: {
            padding:50
        },
        inputContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        input:{
            borderColor:'black',
            borderWidth:1,
            padding:10,
            width:'80%'
        },
        list:{
            padding:10,
            backgroundColor:'#ccc',
            borderWidth:1,
            borderColor:'black',
            marginTop:10
        }
    })

    const [inputText,setInputText]=useState('')
    const [listText,setListText]=useState([])
    const [modal,setModal]=useState(false)

    const onChangeHandler=(enteredText)=>{
        setInputText(enteredText)
    }

    const addHandler=()=>{
        setListText((listText)=>{return [...listText, {id:Math.random().toString(),value:inputText}]})
        setModal(false)
    }

    const closeHandler=()=>{
        setModal(false)
    }

    const deleteHandler=(id)=>{
        setListText((listText)=>{
            return listText.filter((list)=>{
                return list.id !== id
            })
        })
    }

  return (
    <View style={styles.screen}>
        <Button title={'open'} onPress={()=>{setModal(true)}}/>
      <UserInput onChangeHandler={onChangeHandler}
                 inputText={inputText}
                 addHandler={addHandler}
                 modal={modal}
                 closeHandler={closeHandler}
      />
        <FlatList data={listText}
                  keyExtractor={(item,index)=>{
                      return item.id
                  }}
                  renderItem={(listText)=>{
                      return <List input={listText.item.value} deleteHandler={()=>deleteHandler(listText.item.id)}/>
                  }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

