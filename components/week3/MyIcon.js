import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyIcon(props) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
                <FontAwesome name={props.name} size={props.size} color={props.color} />
                <Text style={{ color: 'grey' }}>{props.title}</Text>
            </TouchableOpacity>
        </View >
    );
}

