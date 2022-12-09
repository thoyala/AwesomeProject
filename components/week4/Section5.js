import React from 'react';
import { View, TextInput, Text } from 'react-native';
import MyIcon from '../week3/MyIcon';


export default function Section5() {
    return (
        <View style={{  borderColor : "gray", borderBottomWidth:1 , marginHorizontal : 20 }}>
           
            {/* ก้อนที่ 1 */}
            <View style = {{flexDirection : 'row' , justifyContent : 'space-between' , marginVertical : 10 }}>
                <MyIcon  title = 'wifi' name = 'wifi' color ='grey' size = {30}  />
                <MyIcon  title = 'coffee' name = 'coffee' color ='grey' size = {30}  />
                <MyIcon  title = 'bath' name = 'bath' color ='grey' size = {30}  />
                <MyIcon  title = 'car' name = 'car' color ='grey' size = {30}  />
                <MyIcon  title = 'paw' name = 'paw' color ='grey' size = {30}  />
            </View>
            
        </View>    
    );
}
