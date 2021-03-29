import React from "react";
import { View, Text, Pressable } from "react-native";
import { Auth } from "aws-amplify";

const Downloads = () => {
  const onLogout = () => {
    Auth.signOut();
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        onPress={onLogout}
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "black" }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Downloads;
