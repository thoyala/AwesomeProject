import React from 'react';
import { View, TextInput, Text } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth : 1, borderColor : "gray", borderRadius : 10, padding : 20 , margin : 20 }}>
            {/* ก้อนที่ 1 */}
            <View>
                <Text>What're you looking for?</Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View style = {{flexDirection : 'row' , justifyContent : 'space-around' , marginVertical : 10}}>
                <MyIcon  title = 'Hotel' name = 'building' color ='orange' size = {30}  />
                <MyIcon  title = 'Tour' name = 'map-marker' color ='orange' size = {30}  />
                <MyIcon  title = 'Car' name = 'car' color ='orange' size = {30}  />
                <MyIcon  title = 'Flight' name = 'plane' color ='orange' size = {30}  />
            </View>
            {/* ก้อนที่ 3 */}
            <View style = {{flexDirection : 'row' , justifyContent : 'space-around' , marginVertical : 10}}>
                <MyIcon  title = 'Cruise' name = 'ship' color ='orange' size = {30}  />
                <MyIcon  title = 'Bus' name = 'bus' color ='orange' size = {30}  />
                <MyIcon  title = 'Event' name = 'star' color ='orange' size = {30}  />
                <MyIcon  title = 'More' name = 'ellipsis-h' color ='orange' size = {30}  />
            </View>
        </View>    
    );
}
