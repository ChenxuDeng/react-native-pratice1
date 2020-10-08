import React from 'react';
import {Button, StyleSheet, TextInput, View,Modal} from "react-native";

function UserInput(props) {
    const styles = StyleSheet.create({
        inputContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        input:{
            borderColor:'black',
            borderWidth:1,
            padding:10,
            width:'80%',
            marginBottom:10
        },
        buttonContainer:{
            flexDirection:'row',
            paddingHorizontal:50
        }
    })

    return (
        <Modal visible={props.modal} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={'input text here...'}
                           style={styles.input}
                           onChangeText={props.onChangeHandler}
                           value={props.inputText}
                />
                <View style={styles.buttonContainer}>
                    <View style={{flex:1}}>
                        <Button title={'add'} onPress={props.addHandler}/>
                    </View>
                    <View style={{flex:1,marginLeft:20}}>
                        <Button title={'cancel'} color={'red'} onPress={props.closeHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default UserInput;