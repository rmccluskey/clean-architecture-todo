import { TodoApi } from "../gateways/todoApi";
import { TodoList } from "../entities/todoList";

export class TodoLocalStorageApi implements TodoApi {
    async getTodos(): Promise<TodoList> {
        let todoList = window.localStorage.getItem("todoList");
        if (!todoList) {
            throw Error;
        }
        return JSON.parse(todoList);
    }

    async saveTodos(todoList: TodoList): Promise<TodoList> {
        window.localStorage.setItem("todoList", JSON.stringify(todoList));
        return todoList;
    }
}