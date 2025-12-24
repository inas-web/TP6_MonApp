import { View, Text, Button } from "react-native";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoDetailsScreenZustand({ route, navigation }) {
  const { id, title } = route.params;
  const { removeTodo } = useTodoStore();

  const handleDelete = () => {
    removeTodo(id); // Utilisation de l'action du store Zustand
    navigation.goBack(); // Revenir à l'écran précédent
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{title}</Text>
      <Button
        title="Supprimer cette tâche"
        color="red"
        onPress={handleDelete}
      />
    </View>
  );
}