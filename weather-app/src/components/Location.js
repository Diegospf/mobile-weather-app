import { View, Text } from "react-native";
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

  return (
    <View style={{ padding: 10, width: 200 }}>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={handleChange}
        value={value}
        labelStyle={{ color: "white", fontWeight: "bold", fontSize: 15 }}
        textStyle={{ color: "black" }}
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
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: 10,
        }}
      ></DropDownPicker>
    </View>
  );
}
