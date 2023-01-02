import React , {useState, useEffect} from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { FlatList, _View } from "react-native";

export default function Event(props) {   

    const [onlineEvents, setOnlineEvents] = useState ([]);
    const loadOnlineEvents = async () => {
        try {
            let promise = await fetch ('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
            let data = await promise.json();
            console.log("Load Dataaas, ", data);
            setOnlineEvents(data);
        } catch (error) {
            console.log("Error :", error)
        } 
    }
    useEffect (() => {
        loadOnlineEvents();
    },[]);

    return (
        <View style={props.style}>
            <Text style={{fontSize:20}}>Up Coming Events</Text>
            <Text style={{ marginVertical: 10, color:'grey'}}>What's the Worst That Could Happend</Text>

            <FlatList
                horizontal = {true}
                data = {onlineEvents}
                renderItem = {
                    ({item, index}) =>(
                        <View style ={{marginRight : 10 }}>
                            <Image style = {{width:350, height:250, borderRadius:10}} source = {{uri : item.uri}} />
                            <View style = {{marginTop:-80 , backgroundColor: 'lightyellow', borderColor:'lightgrey', height:80,width:350, borderBottomRightRadius:10, borderBottomLeftRadius:10 , borderWidth:1,flex:1, flexDirection:"row"}}>
                                <View style = {{width:50, flex:4, flexDirection:"column", justifyContent:"flex-start",alignItems: "center"}}>
                                    <Text style = {{color:'tomato',fontSize:20}}>{item.month}</Text>
                                    <Text style = {{color:'grey'}}>{item.date}</Text>
                                </View>
                                <View style ={{width:200, flex:10, flexDirection:"column",justifyContent:"flex-start", alignItems:"flex-start"}}>
                                    <Text style = {{fontSize:20}}>{item.title}</Text>
                                    <Text style = {{color:'grey'}}>{item.datetime}</Text>
                                    <Text style = {{color:'grey'}}>{item.place}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }
            />
        </View>


        
    );
}