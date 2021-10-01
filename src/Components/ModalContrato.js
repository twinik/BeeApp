import React from "react";
import { Alert, Modal, StyleSheet, Text, View,Button } from "react-native";
import InputModal from "./modalForm/InputModal";
import TextAreaModal from "./modalForm/TextAreaModal";
import InputDate from "./modalForm/InputDate";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
export default function ModalContrato({
  modalVisible,
  setModalVisible,
  nombre,
}) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    data= {...data,fechaCreacion:Date.now()}
    alert(data)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Contrata a <Text style={{ fontWeight: "bold" }}>{nombre}</Text>{" "}
          </Text>
          <View style={{ width: "100%" }}>
            
            <InputModal
              icon={<FontAwesome name="header" size={20} color="black" />}
              placeholder="Limpieza baño"
              titulo="Asunto"
              control={control}

            />
            <TextAreaModal
              titulo="Descripcion"
              placeholder="Breve Descripcion"
              control={control}
            />
            <View style={{ marginTop: 10 }}>
              <Text>
                Elija una franja de dias en los que podria llegar a recibir el servicio.
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <InputDate titulo="Fecha" placeholder="11/10/23" disabled/>
                <Text>|</Text>
                <InputDate titulo="Fecha" placeholder="21/10/23" control={control}/>
              </View>
              <Button title="Solicitar Presupuesto" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
