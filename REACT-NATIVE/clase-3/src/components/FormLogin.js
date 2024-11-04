import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class FormLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    render() {
        return (
        <View>
            <TextInput
                placeholder='Ingrese un correo'
                style={styles.input}
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
                placeholder='Ingrese su password'
                style={styles.input}
                keyboardType='default'
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> this.loguearUsuario()}
            >
                <Text>
                    Loguear usuario
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      borderWidth: 2,
      borderColor:'green',
      marginBottom: 10
    },
    btn:{
        padding:16,
        backgroundColor:'pink',
        marginBottom:10
    }
  })