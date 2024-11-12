import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import User from '../components/User'


export default class TodosLosUsuarios extends Component {

    constructor(props){
        super(props)
        this.state = {
            todosLosUsuarios: []
        }
    }

    componentDidMount(){
        db
        .collection('users')
        .orderBy('createdAt', 'desc')
        .limit(5)
        .onSnapshot( docs => {
            let arrDocs = []
            docs.forEach( (doc) => {
                arrDocs.push({
                    id: doc.id,
                    data: doc.data()
                })
            } )

            this.setState({
                todosLosUsuarios: arrDocs
            }, () => console.log('state usuarios', this.state))
        })
    }




    render() {
        return (
        <View>
            <Text>TodosLosUsuarios</Text>
            <FlatList
                data={this.state.todosLosUsuarios}
                keyExtractor={ ( item ) => item.id.toString() }
                renderItem={ ( { item } ) => 
                    <User item={item} />
            }
            />
        </View>
        )
    }
}