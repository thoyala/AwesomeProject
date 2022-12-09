import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome} from '@expo/vector-icons' ;
import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';


export default function Section7() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal : 20, paddingVertical:10}}>
            {/* ก้อนที่ 1 */}
            <View>
                <Text style = {{fontSize:20}}>Room Type</Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View style = {{flexDirection:'row', paddingVertical:10}}>
                <View>
                    <Image style={{width:95, height: 105, borderRadius:5}} source ={require('../../assets/week3/room-8.jpg')} />
                </View>
                {/* ก้อนที่ 3 */}
                <View style = {{marginLeft:10 ,flexDirection:'column', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:20}}>Standard Twin Room</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:30,color:'tomato'}}>$399.99</Text>
                        <Text style = {{color:'grey'}}>Hurry Up! This is your last room!</Text>
                    </View>               
               </View>
            </View>
        </View>    
    );
}
