import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { db } from '../firebase/config'

export default class BuscadorUsers extends Component {
    constructor(props){
        super(props)
        this.state= {
            users: []
        }
    }

    componentDidMount(){
        db.collection('users').onSnapshot((docs)=> {
            let arrDocs = []

            docs.forEach((doc) => arrDocs.push({
                id: doc.id,
                data: doc.data()
            }))

            this.setState({
                users: arrDocs
            })

        })
    }

  render() {
    return (
      <View>
        <Text>Estos son todos los usuarios creados</Text>
        <FlatList
            data={this.state.users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={ ({ item }) => <Text>{item.data.username}</Text>}
        />
      </View>
    )
  }
}