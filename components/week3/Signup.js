import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
            <TextInput placeholder='Input id' />
            <TextInput placeholder='Input email'/>
            <TextInput style = {{marginBottom : 20}} placeholder='Input address'/>
            <Button title="Sign Up" color= "tomato" />
            
        </View>    
    );
}
