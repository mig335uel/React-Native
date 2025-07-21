import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar/AppBar";

const Main = () => {
  return (
    <>
    
      <AppBar />
      <RepositoryList />
    
    </>
  );
};

export default Main;
