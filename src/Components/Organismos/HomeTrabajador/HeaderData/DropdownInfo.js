import React from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { View, Text, StyleSheet } from "react-native";
import { Subtitulo } from "../../../Atomos/Titulos/Textos/index";
import { MaterialIcons } from "@expo/vector-icons";
import CardRequisito from "../../../Atomos/Cards/CardRequisito";

export default function DropdownInfo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={estilos.container}>
      <Collapse
        isExpanded={isOpen}
        onToggle={(isExpanded) => setIsOpen(!isOpen)}
      >
        <CollapseHeader>
          <View style={{ flexDirection: "row" }}>
            <Subtitulo style={{ color: "white", fontSize: 16 }}>
              Alcanza el siguiente nivel
            </Subtitulo>
            {isOpen ? (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={24}
                color="#999999"
                style={{ marginLeft: "auto" }}
              />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#999999"
                style={{ marginLeft: "auto" }}
              />
            )}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{ marginTop: 10 }}>
            <CardRequisito
              titulo="Antigüedad en Ventas"
              descripcion="Completa al menos 60 días como Nuevo Vendedor"
              valor={60}
              valorMaximo={60}
              separador
            />
            <CardRequisito
              titulo="Pedidos"
              descripcion="Recibir y Completar al menos 10 pedidos (en total)"
              valor={0}
              valorMaximo={10}
              separador
            />
            <CardRequisito
              titulo="Ganancias"
              descripcion="Ganar al menos $ 400 de los pedidos completados (en total)"
              valor={0}
              valorMaximo={400}
              valorSign="$"
              separador
            />
            <CardRequisito
              titulo="Dias sin advertencias"
              descripcion="Evita recibir advertencias por infracciones de los Términos de servicio en el transcurso de 30 días"
              valor={30}
              valorMaximo={30}
            />
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#313131",
    borderTopWidth: 0.5,
    borderTopColor: "#4c4c4c",
  },
});
