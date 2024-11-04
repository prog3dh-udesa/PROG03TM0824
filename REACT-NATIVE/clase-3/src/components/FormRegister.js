import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth, db } from '../firebase/config'

export default class FormRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            bio:'',
            username:'',
            password:'',
            error: ''
        }
    }

    registrarUsuario(username, mail, bio, password){
        if(username.length < 3){
            this.setState({error: 'El campo de username debe de ser mayor a 3 caracteres'})
            return;
        }

        if(!mail.includes('@')){
            this.setState({error: 'Ingrese un email valido'})
            return;
        }

        if(password.length < 6){
            this.setState({error: 'El campo de username debe de ser mayor a 5 caracteres'})
            return;
        }

        auth.createUserWithEmailAndPassword(mail, password)
        .then((user) => {
            db.collection('users').add({
                email: mail,
                username: username,
                bio: bio,
                imagenPerfil:'',
                owner: auth.currentUser.email,
                createdAt: Date.now()
            })
            .then(() => this.props.navigation.navigate('anidada'))
        })
        .catch((err)=> console.log(err))
    }

    render() {
        return (
        <View>
            <TextInput
                placeholder='Ingrese un nombre de usuario'
                style={styles.input}
                keyboardType='default'
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
            />
            <TextInput
                placeholder='Ingrese un correo'
                style={styles.input}
                keyboardType='email-address'
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
                placeholder='Añada una breve descripción'
                style={styles.input}
                keyboardType='default'
                value={this.state.bio}
                onChangeText={(text) => this.setState({bio: text})}
            />
            <TextInput
                placeholder='Ingrese su password'
                style={styles.input}
                keyboardType='default'
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={()=> this.registrarUsuario(this.state.username, this.state.email, this.state.bio, this.state.password)}
            >
                <Text>
                    Registrar usuario
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