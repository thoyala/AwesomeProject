import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons' ;


export default function Section6() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal : 20 ,borderBottomWidth:1,borderColor:'grey'}}>
            {/* ก้อนที่ 1 */}
            <View>
                <Text style = {{fontSize : 20,marginVertical:10}}>Location</Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View>
                <Text style={{color:'grey',marginBottom:10}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            {/* ก้อนที่ 3 */}
            <View style = {{flexDirection:'row', marginBottom:10}}>
                <Image style={{flex:1, resizeMode:'cover', aspectRatio : 16/7 }} source = {require('../../assets/week3/map.jpg')} />
            </View>
        </View>    
    );
}
