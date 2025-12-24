import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("todos.db");

export const initDB = () => {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            title TEXT
        );
    `);
};

export const addTodoOffline = (title) => {
    db.runSync(
        "INSERT INTO todos (id, title) VALUES (?, ?)",
        [Date.now(), title]
    );
};

export const updateTodoOffline = (id, title) => {
    db.runSync(
        "UPDATE todos SET title = ? WHERE id = ?",
        [title, id]
    );
};

export const deleteTodoOffline = (id) => {
    db.runSync(
        "DELETE FROM todos WHERE id = ?",
        [id]
    );
};

export const loadTodos = () => {
    return db.getAllSync("SELECT * FROM todos");
};