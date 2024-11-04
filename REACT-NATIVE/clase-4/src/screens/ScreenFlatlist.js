import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Producto from '../components/Producto'

export default class ScreenFlatlist extends Component {
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
    }

    componentDidMount(){
        setTimeout(
            () => {
                fetch('https://fakestoreapi.com/products')
                .then(resp => resp.json())
                .then(data => this.setState({productos: data}))
                .catch(err => console.log(err))
            }, 
            2000
        )
        
    }

    render() {
        return (
        <View style={styles.container}>
            {
                this.state.productos.length === 0
                ?
                <ActivityIndicator size={24} color={'blue'} />
                :
                <>
                <Text>Ultimos productos</Text>
                <FlatList
                data={this.state.productos}
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) => <Producto info={item} />}
                />
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
                <Text>Ultimos productos</Text>
            
                </>
            }

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1 
    }
})