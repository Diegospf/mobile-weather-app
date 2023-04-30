import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";

export default function Location(props) {
  const { value, onValueChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { label: "Recife", value: "BRXX0195" },
    { label: "São Paulo", value: "BRXX0232" },
    { label: "Natal", value: "BRXX0158" },
    { label: "Rio de Janeiro", value: "BRXX0201" },
    { label: "Porto Alegre", value: "BRXX0186" },
    { label: "Brasília", value: "BRXX0043" },
  ];

  function handleChange(newLocation) {
    onValueChange(newLocation);
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => handleChange(item.value)}>
        <View style={{ padding: 10 }}>
          <Text>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ padding: 10, width: 170 }}>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={handleChange}
        value={value}
        labelStyle={{ color: "white", fontFamily: "Jost-Bold", fontSize: 15 }}
        textStyle={{ color: "black", fontFamily: "Jost-Medium", fontSize: 16 }}
        maxHeight={400}
        dropDownDirection="BOTTOM"
        ArrowDownIconComponent={() => (
          <Ionicons name="chevron-down-outline" size={16} color="#fff" />
        )}
        ArrowUpIconComponent={() => (
          <Ionicons name="chevron-up-outline" size={16} color="#fff" />
        )}
        showTickIcon={false}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "transparent",
        }}
        listMode="SCROLLVIEW"
        listItemContainerStyle={{ backgroundColor: "#fff" }}
        dropDownContainerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
        dropDownStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          marginTop: -1,
        }}
        searchable={false}
        renderFlatList={({ style }) => (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
            style={style}
          />
        )}
      />
    </View>
  );
}
