import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

// Méthode avec axios
export const fetchTodosAxios = async () => {
    try {
        const response = await axios.get(`${API_URL}/todos?_limit=10`);
        return response.data;
    } catch (error) {
        console.error("Erreur axios:", error);
        throw error;
    }
};

// Méthode avec fetch
export const fetchTodosFetch = async () => {
    try {
        const response = await fetch(`${API_URL}/todos?_limit=10`);
        if (!response.ok) {
            throw new Error("Erreur serveur");
        }
        return response.json();
    } catch (error) {
        console.error("Erreur fetch:", error);
        throw error;
    }
};