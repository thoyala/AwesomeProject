import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Heartbeat() { 
    
    const [heartbeat, setheartbeat] = useState(0);

    console.log("STATE 2 : ", heartbeat)

    const onPressButton = () => {
        
        let output = (heartbeat + 1);
        setheartbeat(output);
    }
 return (
 <View style={{marginVertical:10 , flexDirection: "row" , justifyContent : "space-around" }}>
    {/* ก้อนที่ 1 */}
    <TouchableOpacity onPress={onPressButton}>
    <View>
        <FontAwesome name="heart" size={40} color = "orange" />
    </View>
    </TouchableOpacity>

    {/* ก้อนที่ 2 */}
   
        <View >
            <Text style={{ fontSize: 30, textAlign: "center" }}>
            {heartbeat}
            </Text>
        </View>

 </View>
 );
}
