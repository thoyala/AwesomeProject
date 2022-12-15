import React from "react";
import { View } from "react-native";
import Bmi from "../../components/week5/Bmi";
import Heartbeat from "../../components/week5/Heartbeat";
export default function Health() {
    return (
        <View style={{
            flex: 1, backgroundColor: 'lightblue',
            justifyContent: "flex-start", padding: 20
        }}>
            <Bmi />
            <Heartbeat />
        </View>
    );
}
