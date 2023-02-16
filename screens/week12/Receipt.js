import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Receipt() {
    return (
        <View>
            <View style={{ padding: 10, marginHorizontal: 20, backgroundColor: 'white', alignItems: 'center', borderColor: 'grey' }}>
                {/* ก้อนที่ 1 */}
                <View >
                    <Text style={{ fontSize: 20 }}>Reciepient Information</Text>
                </View>
                {/* ก้อนที่ 2 */}
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <FontAwesome name='circle' size={12} color="orange" />
                    <FontAwesome name='circle' size={12} color="orange" />
                    <FontAwesome name='circle' size={12} color="orange" />
                    <FontAwesome name='circle' size={12} color="orange" />
                    <FontAwesome name='circle' size={12} color="orange" />

                </View>
                {/* ก้อนที่ 3 */}
                <View style={{ padding: 10, flexDirection: 'column', marginBottom: 10, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                    <View style={{}}>
                        <FontAwesome name='qrcode' size={50} color="orange" />
                    </View>

                    <Text style={{ fontSize: 10 }}>Play with</Text>
                    <Text style={{ fontSize: 20 }}>QR Code Scan</Text>
                </View>
                {/* ก้อนที่ 4 */}

            </View>
            <View style={{ padding: 10, marginHorizontal: 20, backgroundColor: 'white', borderColor: 'grey' }}>
                {/* ก้อนที่ 1 */}
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Reciepient Information</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>ค่าเทอม</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='building' size={50} color="orange" />
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>ค่าเทอม 12,000 บาท</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 1, padding: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>ชื่อนักศึกษา</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='male' size={50} color="orange" />
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>นายทอม ดันดี</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 1, padding: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>ภาควิชา</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='laptop' size={50} color="orange" />
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>วิทยาการคอมพิวเตอร์</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 1, padding: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>คณะ</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='flask' size={50} color="orange" />
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>วิทยาศาสตร์และเทคโนโลยี</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 1, padding: 10 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>มหาวิทยาลัย</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='building-columns' size={50} color="orange" />
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 20 }}>วไลยอลงกรณ์</Text>
                    </View>

                </View>
                <TouchableOpacity >
                    <View style={{ marginVertical: 20, padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                            Print
                        </Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    );
}
