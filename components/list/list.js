import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from "react-native";

function List(props) {
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

    return (
        <TouchableOpacity onPress={props.deleteHandler}>
            <View style={styles.list}>
                <Text>
                    {props.input}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default List;