import React from 'react'
import RubroCard from './RubroCard'
import { View, StyleSheet } from 'react-native'
import {obtener4Rubros} from '../Firebase/Utils/RubrosConexio'
export default function RubrosContainer() {
    React.useEffect(() => {
        obtener4Rubros()
    }, [])
    return (
        <View style={styles.RubrosContainer}>
            <RubroCard />
            <RubroCard />
            <RubroCard />
            <RubroCard />
          </View>
    )
}


const styles = StyleSheet.create({
    RubrosContainer: {
        
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
    }
})