import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "./Components/Data";
import Calificacion from "./Components/Calificacion";
import BotonPresupuesto from "./Components/BotonPresupuesto";
import ModalContrato from "../../ModalContrato";
import ModalContratoOK from "../../ModalContratoOK";

const Body = ({ data }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.body}>
      <ModalContrato
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
      />
      <View style={{ flex: 1, width: "90%" }}>
        <Data data={data} />
        <Calificacion data={data} />
        <BotonPresupuesto onPress={()=>setModalVisible(!modalVisible)}/>
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    flex: 5,
    alignItems: "center",
  },
});
