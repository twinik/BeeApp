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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Mascotas",
    subcategory: [
      { id: 1, val: "Baño de mascotas" },
      { id: 2, val: "Paseador" },
      { id: 3, val: "Revision médica" },
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
        <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View style={{ height: layoutHeight, overflow: "hidden" }}>
        {item.subcategory.map((item, key) => (
          <TouchableOpacity key={key} style={styles.content}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>{item.val}</Text>
              <View style={styles.flecha}>
                <AntDesign name="right" size={24} color="black" />
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
    /*if (multiSelect) {
      //if multiselect is  enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      //if single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[index]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    } */

    //if single select is enabled
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[index]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );
    setlistDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.titleText}>Expandable List View</Text>
          <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)}>
            <Text style={styles.headerButton}>
              {multiSelect
                ? "Activar expansion \n simple"
                : "Activar expansion \n multiple"}
            </Text>
          </TouchableOpacity>
        </View> */}
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
    padding: 20,
  },
  itemText: {
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 10,
  },
  text: {
    flex: 5,
    fontSize: 16,
    padding: 15,
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
