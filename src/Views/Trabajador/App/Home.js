import React from "react";
import { View, ScrollView,Text } from "react-native";
import { IconoTitulo } from "../../../Components/Atomos/Titulos/TitulosIndex";
import SafeAreaViewHybrid from "../../../Components/Atomos/SafeAreaViewHybrid";
import {
  Header,
  Body,
  Dropdown,
} from "../../../Components/Organismos/HomeTrabajador/index";
import { obtenerEstadisticas } from "../../../Firebase/Utils/TrabajadoresConexion";
import AppContext from "../../../Context/AppContext";
export default function Home({ navigation }) {
  const { Token,User } = React.useContext(AppContext);

  const [estadisticas,setEstadisticas] = React.useState(null);
  React.useEffect(() => {
    const f = async () => {
      try{
        var estadisticas = await obtenerEstadisticas(Token);
        setEstadisticas(estadisticas);
        console.log(estadisticas)
      } catch(error){
        console.log(error);
      }
    };
    f();
  }, []);
  return ( 
    estadisticas != null ?  (<SafeAreaViewHybrid>
      <View
        style={{ flex: 0.08, justifyContent: "center", alignItems: "center" }}
      >
        <IconoTitulo
          label={User.nombre+" "+User.apellido}
          uri={User.imgPerfil}
        />
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#EEEEEE" }}
        contentContainerStyle={{}}
      >
        <Header estadisticas={estadisticas}/>
        <Dropdown estadisticas={estadisticas} User={User}/>
        <Body estadisticas={estadisticas}/>
      </ScrollView>
    </SafeAreaViewHybrid>) : (<Text>Cargando</Text>)
    
  );
}
