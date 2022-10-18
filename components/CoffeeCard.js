import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { GestureHandler } from 'expo'
import { Swipeable } from 'react-native-gesture-handler'

const LeftActions = () =>{
    return (
        <View style={styles.leftAction}>
            <Text style={styles.actionText}>Like</Text>
        </View>
    )
}

const RightActions = () =>{
    return (
        <View style={styles.rightAction}>
            <Text style={styles.actionText}>Nope</Text>
        </View>
    )
}

export function CoffeeCard({image, name, description}) {
    return (
        <Swipeable
            style={styles.container}
            onSwipeableOpen={(direction) =>{
                if (direction === 'left') {
                    console.log('Liked')
                } else if (direction === 'right') {
                    console.log('Nope')
                }
            }}
            renderLeftActions={LeftActions}
            renderRightActions={RightActions}>
            <View style={styles.card}>
                <Image source={{uri:image, width:200,height:200 }} style={styles.backgroundImage} />
                <View style={styles.cardContent}>
                    <Text style={styles.coffeeName}>{name}</Text>
                    <Text style={styles.coffeeDescription}>{description}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
    },
    card:{
        backgroundColor:'#2C2C2C',
        width: Dimensions.get('window').width ,
        height: '100%',
    },
    coffeeName:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    coffeeDescription:{
        color: 'white',
    },
    backgroundImage: {
        width: '100%',
        height: '90%',
        resizeMode: 'cover', // or 'stretch'
      },
    cardContent:{
        padding: 15,
    },
    leftAction:{
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex:1
    },
    rightAction:{
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex:1
    },
    actionText:{
        color: 'white',
        fontWeight: '600',
        padding: 20,
    }

})