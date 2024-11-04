import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import Posteo from '../components/Posteo'
import { db } from '../firebase/config'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      posteos:[]
    }
  }

  componentDidMount(){
    db.collection('posteos')
    .onSnapshot((docs) => {
      let arrDocs = []
      docs.forEach(doc => {
        arrDocs.push({
          id:doc.id,
          data: doc.data()
        })
      })

      this.setState({
        posteos: arrDocs
      })

    })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.posteos}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({item}) => <Posteo infoPosteo={item} />}
        />
      </View>
    )
  }
}