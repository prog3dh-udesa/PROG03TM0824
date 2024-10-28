import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
    }

    irAlLogin(){
        this.props.navigation.navigate('login')
    }

    goToAnidada(){
        this.props.navigation.navigate('anidada')
    }
  render() {
    return (
      <View>
        <Text>Register</Text>
        <TouchableOpacity
        onPress={()=> this.irAlLogin()}
        >
            <Text>Ir al login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=> this.goToAnidada()}
        >
            <Text>Ir a la navegacion anidada</Text>
        </TouchableOpacity>
      </View>
    )
  }
}