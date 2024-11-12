import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { Component } from 'react'

class MiPrimerScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: 'Pepe'
        }
    }

    componentDidMount(){
        console.log('Se monto mi componente')
    }

    touchCorto(){
        console.log('Hubo un touch corto')
    }

    touchLargo(){
        console.log('Hubo un touch largo')
    }

    render(){
        return(
            <View
            >
                
                <Text>Bienvenidos a RN, este es mi primer Screen</Text>
                <TouchableOpacity
                    onPress={ () => this.touchCorto() }
                    onLongPress={ ()=> this.touchLargo() }
                >
                    <Text>
                        Presiona aqui y mira la magia en consola
                    </Text>
                </TouchableOpacity>
                {
                    //Image con recurso en local
                }
                <Image
                    style={styles.imageRM}
                    source={require('../../assets/rick_face.png')}
                    resizeMode='contain'
                />

                {
                    //Image con recurso externo
                }
                <Image
                    style={styles.image2}
                    source={{uri: 'https://i.pinimg.com/736x/1d/34/40/1d3440b88ae169ae134643005e5215de.jpg'}}
                    resizeMode='cover'
                />

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    },
    imageRM: {
        height: 150,
        width:120
    },
    image2: {
        position:'absolute',
        zIndex:-1,
        height: '100%',
        width: '100%',
    }
})

export default MiPrimerScreen