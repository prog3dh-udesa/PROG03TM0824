import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'

export default class NewPost extends Component {

    constructor(props){
        super(props)
        this.state={
            descPost: '',
            urlImagen:'',
        }
    }

    crearPosteo(descPost, urlImagen){
        if(descPost === ''){
            return
        }
        db.collection('posteos').add({
            owner: auth.currentUser.email,
            createdAt: Date.now(),
            descripcion: descPost,
            likes:[],
            comentarios:[],
            urlImagen: urlImagen
        })
        .then(() => this.props.navigation.navigate('home'))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <View>
        <Text>NewPost</Text>
        <View>
            <TextInput
                style={styles.input}
                placeholder='Agrega una descripcion a tu posteo'
                value={this.state.descPost}
                onChangeText={(text)=> this.setState({descPost: text})}
            />
            <TouchableOpacity
                onPress={()=> this.crearPosteo(this.state.descPost, this.state.urlImagen)}
            >
                <Text>Crear posteo</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 2,
        borderColor: 'blue',
        marginBottom: 16
    }
})