import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RubrosConexio from '../../Firebase/Utils/RubrosConexio'

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Mascotas",
    category_photo: 'https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1200px-Creative-Tail-Animal-dog.svg.png',
    subcategory: [
      { id: 1, val: "Baño de mascotas", photo:'https://image.flaticon.com/icons/png/512/1068/1068462.png'},
      { id: 2, val: "Paseador", photo: 'https://i.pinimg.com/originals/8d/e3/17/8de317daa4a90876a5f451bf8de945bc.png'},
      { id: 3, val: "Revision médica", photo: 'https://doctoravanevet.com/wp-content/uploads/2020/04/Servicios-vectores-consulta-integral.png'},
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 2",
    subcategory: [
      { id: 3, val: "Sub 3" },
      { id: 4, val: "Sub 4" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    subcategory: [
      { id: 5, val: "Sub 5" },
      { id: 6, val: "Sub 6" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 4",
    subcategory: [
      { id: 7, val: "Sub 7" },
      { id: 8, val: "Sub 8" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 5",
    subcategory: [{ id: 9, val: "Sub 9" }],
  },
  {
    isExpanded: false,
    category_name: "Item 6",
    subcategory: [{ id: 10, val: "Sub 10" }],
  },
];

const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={onClickFunction}>
        <View style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <Image style={styles.category_photo} source={{ uri:item.category_photo}}></Image>
        </View>
        
        <View style={{flex: 5, justifyContent: 'center'}}>
          <Text style={styles.itemText}>{item.category_name}</Text>
        </View>
        
      </TouchableOpacity>
      <View style={{ height: layoutHeight, overflow: "hidden" }}>
        {item.subcategory.map((item, key) => (
          <TouchableOpacity key={key} style={styles.content}>
            <View style={{ flexDirection: "row" }}>

              <View style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                <Image style={styles.subcategory_photo} source={{ uri:item.photo}}/>
              </View>

              <View style={{flex: 5, justifyContent: 'center'}}>
                <Text style={styles.text}>{item.val}</Text>
              </View>
              
            </View>

            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ListViewRubros = () => {
  const [multiSelect, setmultiSelect] = useState(false);
  const [listDataSource, setlistDataSource] = useState(CONTENT);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    //if single select is enabled
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[index]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );
    setlistDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    //padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  headerButton: {
    textAlign: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    padding: 15,
  },
  category_photo:{
    height: 40,
    width: 40,
    resizeMode: 'cover',
  },
  subcategory_photo:{
    height: 40,
    width: 40,
    resizeMode: 'cover',
  },
  flecha: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 28,
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#c8c8c8",
  },
});

export default ListViewRubros;
