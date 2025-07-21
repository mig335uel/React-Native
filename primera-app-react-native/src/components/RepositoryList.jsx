import React from "react";
import { View, Text, ScrollView, FlatList, StatusBar } from "react-native";

import Repository from "../data/Repository";


const renderItem = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
    <Text>{item.owner}</Text>
    <Text>{item.stars}</Text>
    <Text>{item.description}</Text>
  </View>
);

export default function RepositoryList() {
  return (
    <View>
      <StatusBar style="auto"/>
      <FlatList
        data={[Repository]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
