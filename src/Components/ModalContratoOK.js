import React from "react";
import { Alert, Modal, StyleSheet, Text, View, ScrollView } from "react-native";
import InputModal from "./modalForm/InputModal";
import TextAreaModal from "./modalForm/TextAreaModal";
import InputDate from "./modalForm/InputDate";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import MyText from "./MyText";
import BotonGeneric from "../Components/Botones/BotonGeneric";
export default function ModalContrato({ modalVisible, setModalVisible, data }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = { ...data, fechaCreacion: Date.now() };
    console.log(data);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={{ height: 65 }}>
              <MyText
                text={"Contrata a \n" + data.nombre + " " + data.apellido}
                fontStyle="Bold"
                style={{ fontSize: 23 }}
              />
            </View>
            <View style={styles.containerContent}>
              <InputModal
                icon={<FontAwesome name="header" size={20} color="black" />}
                placeholder="Limpieza baño"
                titulo="Asunto"
                control={control}
              />
              <TextAreaModal
                titulo="Descripcion"
                placeholder="Describa su solicitud"
                control={control}
              />
              <View style={{ marginTop: 10 }}>
                <MyText
                  text="Elija una franja de dias en los que podria llegar a recibir el
                  servicio."
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <InputDate titulo="Fecha" placeholder="11/10/23" disabled />
                  <InputDate
                    titulo="Fecha"
                    placeholder="21/10/23"
                    control={control}
                  />
                </View>
              </View>
            </View>

            <View style={styles.containerButtons}>
              <View style={{ flex: 1 }}>
                <BotonGeneric
                  title="Cancelar"
                  style={styles.cancelar}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <View style={{ flex: 1 }}>
                <BotonGeneric
                  title="Enviar"
                  style={styles.enviar}
                  styleText={{ fontWeight: "bold" }}
                  onPress={handleSubmit(onSubmit)}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(219, 219, 219, 0.6)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "85%",
    height: "90%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  containerContent: {
    height: 480,
  },

  containerButtons: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  enviar: {
    height: "75%",
    backgroundColor: "#7936E4",
    borderRadius: 15,
    marginLeft: 5,
  },

  cancelar: {
    height: "75%",
    backgroundColor: "grey",
    borderRadius: 15,
    marginRight: 5,
  },
});
