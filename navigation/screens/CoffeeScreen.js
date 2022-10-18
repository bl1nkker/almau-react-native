import React from 'react';
import {View, StyleSheet} from 'react-native';
import { CoffeeCard } from '../../components/CoffeeCard';

export default function CoffeeScreen({navigation}){
    return (
        <View style={styles.content}>
            <CoffeeCard image='https://www.looper.com/img/gallery/the-real-reason-jason-lee-isnt-in-movies-anymore/l-intro-1614882266.jpg' name='Jason Lee' description='Some Description' />
        </View>
    );
}

var styles = StyleSheet.create({
    content:{
        width: '100%',
        height: '100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
});