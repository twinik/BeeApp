import React from 'react'
import RubroCard from './RubroCard'
import { View, StyleSheet ,Text} from 'react-native'
import { obtener4Rubros} from '../Firebase/Utils/RubrosConexio'
export default function RubrosContainer() {
    
    const [rubros, setRubros] = React.useState(null)

    React.useEffect(() => {
        (async () => {
            async function fetchData() {
                const response = await obtener4Rubros();
                setRubros(response)
              }
              fetchData();
            
        })();
         
    }, [])
    return (
        <View style={styles.RubrosContainer}>
            {rubros != null ? rubros.map((rubro, i) => <RubroCard titulo={rubro.nombre} uri={rubro.imgUrl} key={i}/>) : <Text>Cargando</Text> }
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