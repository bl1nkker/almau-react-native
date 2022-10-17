import React from 'react';
import {View, Text} from 'react-native';

export default function RedCardScreen({navigation}){
    return (
        <View>
            <Text
            onPress={() => navigation.navigate('GreenCard')}
            >To Green Card Screen</Text>
        </View>
    );
}