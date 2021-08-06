import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Profile({ navigation }) {
    return(
        <View style={{flex:1, backgroundColor:'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Edit profile</Text>
            <Button title="Guardar" onPress={() => navigation.goBack()} />
        </View>
    )
}