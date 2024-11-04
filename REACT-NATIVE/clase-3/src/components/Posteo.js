import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'
export default class Posteo extends Component {
    constructor(props){
        super(props)
        this.state={
            estaMiLike: false
        }
    }

    componentDidMount(){
        let estaMiLike = this.props.infoPosteo.data.likes.includes(auth.currentUser.email)
        if(estaMiLike){
            this.setState({estaMiLike: true})
        }
    }

    darLike(){
        db
        .collection('posteos')
        .doc(this.props.infoPosteo.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(() => this.setState({estaMiLike: true}))
    }

    quitarLike(){
        db
        .collection('posteos')
        .doc(this.props.infoPosteo.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(() => this.setState({estaMiLike: false}))

    }

  render() {
    return (
      <View>
        <Text>{this.props.infoPosteo.data.descripcion}</Text>
        {
            this.state.estaMiLike ?
                <TouchableOpacity
                    onPress={()=> this.quitarLike()}
                >
                    <Text>Quitar like</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity
                    onPress={()=> this.darLike()}
                >
                    <Text>Dar like</Text>
                </TouchableOpacity>
        }
      </View>
    )
  }
}