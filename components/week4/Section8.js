import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons' ;


export default function Section8() {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal : 20, paddingVertical:10, borderTopWidth:1, borderBottomWidth:1,borderColor: 'grey', justifyContent : 'space-between'}}>
            {/* ก้อนที่ 1 */}
            <View style = {{justifyContent:'center'}}>
                <Text>Price</Text>
                <Text style={{fontSize:30 , color:'tomato'}}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            {/* ก้อนที่ 2 */}  
            <View style = {{ justifyContent:'center'}}>
                <Button  title="   Book Now   " color="potato"  />
            </View>
        </View>    
    );
}
