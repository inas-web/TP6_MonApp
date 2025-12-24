import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTodo } from "../store/todosSlice";
import AppBar from "../components/AppBar";

export default function TodolistScreen({ navigation }) {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTodo({ id: 1, title: "Faire les courses" }));
    dispatch(addTodo({ id: 2, title: "Sortir le chien" }));
    dispatch(addTodo({ id: 3, title: "Coder une app RN" }));
  }, [dispatch]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AppBar title="Mes tâches" />
      
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Détails", item)}
            style={{ padding: 10, marginVertical: 5, backgroundColor: "#f0f0f0" }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}