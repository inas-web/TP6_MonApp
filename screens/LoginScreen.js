import { useState, useContext } from "react"; 
import { View, Text, TextInput, Button, StyleSheet } from "react-native"; 
import { AuthContext } from "../context/AuthContext"; 
 
export default function LoginScreen() { 
 const [name, setName] = useState(""); 
 const { login } = useContext(AuthContext); 
 
 return ( 
   <View style={styles.container}> 
     <Text style={styles.title}>Connexion</Text> 
 
     <TextInput 
       style={styles.input} 
       placeholder="Votre nom"
          value={name} 
       onChangeText={setName} 
     /> 
 
     <Button title="Se connecter" onPress={() => login(name)} /> 
   </View> 
 ); 
} 
 
const styles = StyleSheet.create({ 
 container: { 
   flex: 1, 
   justifyContent: "center", 
   padding: 20, 
 }, 
 title: { fontSize: 28, marginBottom: 20, textAlign: "center" }, 
 input: { 
   borderWidth: 1, 
   borderColor: "#ccc", 
   marginBottom: 20, 
   padding: 10, 
   borderRadius: 6, 
 }, 
}); 