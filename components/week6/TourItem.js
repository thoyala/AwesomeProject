import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10 }}>
            <Image style={{ height: 150, width: 250, borderRadius: 10 }} source={{ uri: props.item.uri }} />
            <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: "black", opacity: 0.5, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                <Text style={{ fontSize: 20, color: "white" }}>
                    {props.item.title}
                </Text>
            </View>
        </View>
    );
}
