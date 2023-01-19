import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';

export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: '#50E3C2' }}></View>
        <View style={{ flex: 1, backgroundColor: '#4A90E2' }}></View>
        <View style={{ flex: 1, backgroundColor: '#9013FE' }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex01")} />
    </View>

  );
}