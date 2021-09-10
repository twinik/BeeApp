import React from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import ModalContrato from "../../../Components/ModalContrato";
import SafeAreaViewHybrid from "../../../Components/Atomos/SafeAreaViewHybrid"

import {Header, Body} from "../../../Components/Organismos/TrabajadorProfile/Index"

export default function TrabajadorProfile({ route, navigation }) {
  const { data } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {}, []);
  return (
    <SafeAreaViewHybrid>
      <Header data={data}/>
      <Body data={data}/>
    </SafeAreaViewHybrid>

    /*     <View style={{ flex: 1, marginTop: 50 }}>
      <ModalContrato modalVisible={modalVisible} setModalVisible={setModalVisible} nombre={data.nombre+" "+data.apellido}/>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: data.img }}
          style={{ width: 100, height: 100, marginRight: 20 }}
        />
        <View>
          <Text>{data.nombre}</Text>
          <Text>{data.apellido}</Text>
          <Text>{data.telefono}</Text>
          <Text>{data.sexo}</Text>
        </View>
      </View>
      <Text>{data.calificacion}</Text>
      <Text>{data.ubicacion}</Text>
      <Text>{data.descripcion}</Text>
      <Button title="Contratar" onPress={()=>setModalVisible(!modalVisible)}/>
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
