import { View, Text, FlatList, Button, TextInput } from "react-native";
import { useEffect, useState, useContext } from "react";
import {
    loadTodos,
    addTodoOffline,
    updateTodoOffline,
    deleteTodoOffline,
} from "../services/database";
import { ThemeContext } from "../context/ThemeContext";

export default function TodolistOfflineScreen() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [editingId, setEditingId] = useState(null);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const refreshTodos = () => {
        setTodos(loadTodos());
    };

    const handleAddOrUpdate = () => {
        if (!title.trim()) return;

        if (editingId) {
            updateTodoOffline(editingId, title);
            setEditingId(null);
        } else {
            addTodoOffline(title);
        }

        setTitle("");
        refreshTodos();
    };

    const handleDelete = (id) => {
        deleteTodoOffline(id);
        refreshTodos();
    };

    useEffect(() => {
        refreshTodos();
    }, []);

    // Styles dynamiques basés sur le thème
    const textStyle = {
        color: theme === "dark" ? "#ffffff" : "#000000",
    };

    const inputStyle = {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderColor: theme === "dark" ? "#666" : "#ccc",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Theme toggle */}
            <Button
                title={`Passer en mode ${theme === "light" ? "dark" : "light"}`}
                onPress={toggleTheme}
            />

            {/* Add / Update */}
            <View style={{ padding: 10 }}>
                <TextInput
                    placeholder="Tâche offline"
                    placeholderTextColor={theme === "dark" ? "#aaa" : "#666"}
                    value={title}
                    onChangeText={setTitle}
                    style={inputStyle}
                />

                <Button
                    title={editingId ? "Mettre à jour" : "Ajouter hors ligne"}
                    onPress={handleAddOrUpdate}
                />
            </View>

            {/* Liste */}
            {todos.length === 0 ? (
                <Text style={[{ textAlign: "center", marginTop: 20 }, textStyle]}>
                    Aucune tâche disponible hors ligne
                </Text>
            ) : (
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: theme === "dark" ? "#333" : "#eee",
                            }}
                        >
                            <Text style={textStyle}>{item.title}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Button
                                    title="✏️"
                                    onPress={() => {
                                        setTitle(item.title);
                                        setEditingId(item.id);
                                    }}
                                />
                                <Button
                                    title="🗑️"
                                    onPress={() => handleDelete(item.id)}
                                />
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}