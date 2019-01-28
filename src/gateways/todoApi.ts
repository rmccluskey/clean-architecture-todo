import * as TodoList from "../entities/todoList";

export type TodoApi = {
    getTodos(): Promise<TodoList.TodoList>;
    saveTodos(todoList: TodoList.TodoList): Promise<TodoList.TodoList>;
}