import React from "react";
import { FlatList, Text,View } from "react-native";
import Butao from "./Butao";

const data = [<Butao />, <Butao />, <Butao />, <Butao />, <Butao />];

export default function Carrosel() {
    return (
        <FlatList
            data={data}
            horizontal={true}
            style={{ width: "100%", height: "20%",marginTop:"5%"}}
            renderItem={({ item }) => <Text>{item}</Text>}
            ItemSeparatorComponent={() => <View style={{width:10}} />}
        />
    );
}
