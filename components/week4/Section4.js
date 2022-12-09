import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons' ;


export default function Section4() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal : 20, borderTopWidth : 1, borderBottomWidth:1 ,borderColor :'grey' , paddingVertical:10}}>
            {/* ก้อนที่ 1 */}
            <View>
                <Text style = {{fontSize : 20}}>Hotel Description</Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View>
                <Text style={{color:'grey'}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
