import React from 'react';
import {View, Text} from 'react-native';

export default function BlueCardScreen({navigation}){
    return (
        <View>
            <Text
            onPress={() => navigation.navigate('RedCard')}
            >To Red Card Screen</Text>
        </View>
    );
}