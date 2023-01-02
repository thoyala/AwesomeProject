import React from "react";
import { Image, ScrollView, Text, View } from "react-native";


export default function Tour(props) {
    return (
        <View style={props.style}>
            <Text style= {{ fontSize : 20}}>Tour</Text>
            <Text style = {{color: "grey" , marginVertical: 10}}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true}> 
                <View style = {{flexDirection: "row"}}>
                    {/* <TourItem />
                    <TourItem />
                    <TourItem /> */}
                    <View style = {{ marginRight : 10}}>
                        <Image style={{ height:150, width: 250 , borderRadius : 10}} source = {{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
                        <View style={{ marginTop:10 , height: 50 , width: 250 ,  paddingHorizontal:10, backgroundColor: "black", opacity : 0.5, borderBottomRightRadius : 10, borderBottomLeftRadius : 10 , marginTop: -50}}>
                            <Text style = {{fontSize:20 , color : "white" }}>
                                Tour in Somewhere
                            </Text>
                        </View>
                    </View>
                    <View style = {{ marginRight : 10}}>
                        <Image style={{ height:150, width: 250 , borderRadius : 10}} source = {{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
                        <View style={{ marginTop:10 , height: 50 , width: 250 ,  paddingHorizontal:10, backgroundColor: "black", opacity : 0.5, borderBottomRightRadius : 10, borderBottomLeftRadius : 10 , marginTop: -50}}>
                            <Text style = {{fontSize:20 , color : "white" }}>
                                Tour in Somewhere
                            </Text>
                        </View>
                    </View>
                    <View style = {{ marginRight : 10}}>
                        <Image style={{ height:150, width: 250 , borderRadius : 10}} source = {{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
                        <View style={{ marginTop:10 , height: 50 , width: 250 ,  paddingHorizontal:10, backgroundColor: "black", opacity : 0.5, borderBottomRightRadius : 10, borderBottomLeftRadius : 10 , marginTop: -50}}>
                            <Text style = {{fontSize:20 , color : "white" }}>
                                Tour in Somewhere
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}
