import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);
  
  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Non connecté</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Utilisateur : {user.username}</Text>
      <Button title="Se déconnecter" onPress={logout} />
    </View>
  );
}