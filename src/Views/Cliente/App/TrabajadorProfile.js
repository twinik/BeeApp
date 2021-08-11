import React from "react";
import { View, Text, Image, Button} from "react-native";
import ModalContrato from "../../../Components/ModalContrato";
export default function TrabajadorProfile({ route, navigator }) {
  const { data } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useEffect(() => {}, []);
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
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
    </View>
  );
}
