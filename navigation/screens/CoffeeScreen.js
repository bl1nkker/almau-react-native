import React from 'react';
import {View, Text} from 'react-native';
import { CoffeeCard } from '../../components/CoffeeCard';

export default function CoffeeScreen({navigation}){
    return (
        <View>
            <CoffeeCard />
        </View>
    );
}