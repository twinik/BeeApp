import React, { useState, state } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import { obtenerRubros } from "../../../Firebase/Utils/RubrosConexio";
import { obtenerTrabajadoresFiltro } from "../../../Firebase/Utils/TrabajadoresConexion";
import Busqueda from "../../../Components/Busqueda/Busqueda";
import Recomendados from "../../../Components/Busqueda/Recomendados";
import ContTrabajadores from "../../../Components/Busqueda/ContTrabajadores";
const { width, height } = Dimensions.get("window");

export default function Bienvenido({ navigation, route }) {
  StatusBar.setBackgroundColor("white", true);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [value, setValue] = React.useState("");
  const [rubros, setRubros] = React.useState([]);
  const [trabajadores, setTrabajadores] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [time, setTime] = React.useState(null);
  const ref = React.useRef();
  React.useEffect(() => {
    try {
      ref.current.focus();
      var func = async () => {
        setLoading(true);
        setRubros(await obtenerRubros());
        setLoading(false);
        if (route.params?.busqueda) {
          setValue(route.params.busqueda);
          setSearchQuery(route.params.busqueda);
        }
      };
      func();
    } catch (e) {
      console.log(e);
    }
  }, []);
  const onChangeSearch = (query) => {
    setValue(query);
    time != null ? clearTimeout(time) : null;
    setTime(
      setTimeout(() => {
        setSearchQuery(query);
        setTrabajadores([]);
      }, 300)
    );
  };

  var buscarTrabajadores = async (query) => {
    setValue(query);
    setSearchQuery(query);
    setLoading(true);
    setTrabajadores(await obtenerTrabajadoresFiltro(query));
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.HeaderIcons}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={28}
            color="#7936E4"
            style={{ position: "absolute", left: 0 }}
          />
          <Text style={[styles.titulo]}>ServBee</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Searchbar
            style={styles.Searchbar}
            inputStyle={{ fontSize: 15 }}
            placeholder="¿Que servicio quiere contratar?"
            placeholderTextColor="#7878AB"
            onChangeText={onChangeSearch}
            value={value}
            ref={ref}
          />
        </View>
      </View>
      <View style={styles.fragmentResultados}>
        <ScrollView>
          {loading ? (
            <Text>Cargando</Text>
          ) : searchQuery == "" ? (
            <Recomendados fc={buscarTrabajadores} Rubros={rubros} />
          ) : trabajadores != null && trabajadores.length == 0 ? (
            <Busqueda
              searchQuery={searchQuery}
              Rubros={rubros}
              fc={buscarTrabajadores}
            />
          ) : (
            <ContTrabajadores traba={trabajadores} func={navigation} rubro={searchQuery}/>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    alignItems: "center",
    flex: 0.2,
    paddingHorizontal: "5%",
  },
  fragmentResultados: {
    flex: 0.8,
  },
  HeaderIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: "8%",
  },
  headerCentral: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: "8%",
  },
  titulo: {
    color: "#7936E4",
    fontWeight: "bold",
    fontSize: 26,
  },
  Searchbar: {
    borderRadius: 30,
    width: width / 1.15,
    height: height / 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  img: {
    width: 200,
    height: 200,
  },
  tituloDown: {
    fontWeight: "bold",
    fontSize: 25,
  },
  subTitulo: {
    fontSize: 13,
  },
});
