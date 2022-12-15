import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Bmi() {
    const [weight, setweight] = useState('70');
    const [height, setheight] = useState('170');
    const [bmi, setbmi] = useState('0');
    const [thisBMI, setthisBMI] = useState('normal');

    console.log("STATE : ", weight, height, bmi, thisBMI)

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setbmi(output.toFixed(2));

        let description = "";
            if (output<18.5)
                    description ="Underweight - eat a bagel!";
            else if (output>=18.5 && output<=24.99)
                    description ="Normal - keep it up!";
            else if (output>=25 && output<=29.99)
                    description ="Overweight - exercise more!";
            else if (output>=30 && output<=39.99)
                    description ="Obese - get off the couch!";
            else
                    description ="Morbidly Obese - take action!";

        setthisBMI(description);

 
    };





return (
    <View>
        {/* บรรทัดที่ 1 */}
        <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: "space-around", marginVertical : 10}}>
            <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
            <TextInput onChangeText={ (newWeight) => setweight(newWeight) } value={weight} style={{ fontSize: 20 }} keyboardType="numeric" placeholder="Input your Weight ..." />
        </View>
        {/* บรรทัดที่ 2 */}
        <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: "space-around", marginVertical : 10 }}>
            <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
            <TextInput onChangeText={ (newHeight) => setheight(newHeight) } value={height} style={{ fontSize: 20 }} keyboardType="numeric"placeholder="Input your Height ..." />
        </View>
        {/* บรรทัดที่ 3 */}
        <View style={{ flexDirection: "row", marginVertical: 10, alignContent: "space-between"}}>
            {/* ซ้าย */}
            <View style={{flex:1 , borderRadius:10, backgroundColor: "white" , marginRight:10 , height : 100, justifyContent : "center" , alignItems : "center"}}>
                <Text style={{ fontSize: 20 }}>{bmi}</Text>
            </View>
            {/* ขวา */}
            <View style={{flex:1 , borderRadius:10, backgroundColor: "white" , alignContent: "center", padding : 10 , marginLeft : 10 , height : 100, justifyContent : "center" , alignItems : "center"}}>
                <Text style={{ fontSize: 20 }}>{thisBMI}</Text>
            </View>

        </View>
        {/* บรรทัดที่ 4 */}
        <TouchableOpacity onPress={onPressButton}>
            <View style={{ marginVertical : 10 , padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                    Calculate
                </Text>
            </View>
        </TouchableOpacity>

    </View>
);
}
