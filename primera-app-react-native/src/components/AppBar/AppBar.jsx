import React from "react";

import { View, Text, ScrollView, FlatList, StatusBar, StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,

    },
});

export default function AppBar() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Repository List</Text>
        </View>
    );
    }