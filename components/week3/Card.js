import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Card() {
    return (
        <View style={{ padding : 20  }}>
            {/* ก้อนที่ 1 */}
            <View>
            < Image style={{ width:50, height:50, borderRadius:50/2  }} source={ require('../../assets/week3/profile-2.jpg') } />
                <View>
                    <Text style={{ color : 'grey'}}>Steve Garrett</Text>
                </View>
            </View>
            {/* ก้อนที่ 2 */}
            <View>

            </View>
            {/* ก้อนที่ 3 */}
            <View>

            </View>
        </View>    
    );
}
