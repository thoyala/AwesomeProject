import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function MyIcon(props) {
    return (
        <View style={{ justifyContent : 'center', alignItems : 'center' }}>
            <FontAwesome name={props.name} size={props.size} color={props.color} />
        <Text style = {{color:'grey'}}>{props.title}</Text>
        </View>    
    );
}

