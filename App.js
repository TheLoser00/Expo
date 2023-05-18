import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TextInput, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/yamaha_logo.png')}/>
      <TextInput
        style={styles.labels}
        label="Username"
        leading={(props) => <Icon name="account" {...props} />}
      />
      <TextInput
        style={styles.labels}
        label="Password"
        secureTextEntry={true}
        variant="outlined"
        trailing={(props) => (
          <IconButton
            icon={(props) => <Icon name="eye" {...props} />}
            {...props}
          />
        )}
      />
        <Button style={styles.buttons} title="Login" onPress={() => alert("Login")} />
        <Button style={styles.buttons} title="Create new account" onPress={() => alert("Register")} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
  },
  labels: {
    width: 250,
  },
  buttons: {
    marginTop: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});

export default App;
