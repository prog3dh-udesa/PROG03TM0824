import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Producto extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={styles.producto}>
        <Text>{this.props.info.title}</Text>
        <Image
            source={{uri: this.props.info.image}}
            style={styles.imagen}
            resizeMode='contain'
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    producto:{
        width: 280
    },
    imagen:{
        width: 200,
        height: 150
    }
})