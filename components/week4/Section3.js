import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section3() {
    return (
        <View style={{ padding : 20 , flexDirection : 'row' }}>
            {/* ก้อนที่ 1 */}
            <View style = {{height:50, width:50, borderRadius:50/2, backgroundColor:"tomato" , justifyContent:'center'}}>
                <Text style = {{textAlign:'center' , color:'white'}}>9.5</Text>
            </View>
            {/* ก้อนที่ 1 */}
            <View style = {{ marginLeft:10 , justifyContent:'center'}}>
               <Text style = {{fontSize:20, color:'tomato'}}>Excellent</Text>
               <Text>See 801 reviews</Text>
            </View>
        </View>    
    );
}
