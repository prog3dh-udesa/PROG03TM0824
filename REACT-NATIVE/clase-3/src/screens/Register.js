import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FormRegister from '../components/FormRegister'
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
        <View>
          <FormRegister navigation={this.props.navigation} />
        </View>
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor:'green',
    marginBottom: 10
  }
})