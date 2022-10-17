import React from 'react';
import {View, Text} from 'react-native';

export default function GreenCardScreen({navigation}){
    return (
        <View>
            <Text
            onPress={() => navigation.navigate('BlueCard')}
            >To Blue Card Screen</Text>
        </View>
    );
}