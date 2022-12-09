import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons' ;


export default function Section2() {
    return (
        <View style={{ padding : 10 , borderWidth : 1, borderRadius : 10, marginTop : -30 , marginHorizontal : 20, backgroundColor : 'white' , alignItems : 'center', borderColor:'grey'}}>
            {/* ก้อนที่ 1 */}
            <View >
                <Text style = {{fontSize : 30 }}>Hilton San Francisco</Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View style ={{flexDirection : 'row' , marginVertical : 10}}>
                <FontAwesome name='star' size={20} color = "orange" />
                <FontAwesome name='star' size={20} color = "orange" />
                <FontAwesome name='star' size={20} color = "orange" />
                <FontAwesome name='star' size={20} color = "orange" />
                <FontAwesome name='star-half' size={20} color = "orange" />
            </View>
            {/* ก้อนที่ 3 */}
            <View style = {{marginBottom : 20}}>
                <Text style ={{textAlign : 'center',color:'grey'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>    
    );
}
