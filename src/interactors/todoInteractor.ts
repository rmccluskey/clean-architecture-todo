import * as TodoList from "../entities/todoList";
import { TodoApi } from "../gateways/todoApi";
import { Todo } from "../entities/todo";

export class TodoInteractor {
    constructor(private todoApi: TodoApi) { }

    async getTodoList(): Promise<TodoList.TodoList> {
        try {
            return await this.todoApi.getTodos();
        } catch (e) {
            let todoList = TodoList.create();
            return await this.todoApi.saveTodos(todoList);
        }
    }

    async addTodo(todoList: TodoList.TodoList, title: string): Promise<TodoList.TodoList> {
        let updatedTodoList = TodoList.addTodo(todoList, title);
        return await this.todoApi.saveTodos(updatedTodoList);
    }

    async toggleTodo(todoList: TodoList.TodoList, todo: Todo): Promise<TodoList.TodoList> {
        let updatedTodoList = TodoList.toggleTodo(todoList, todo);
        return await this.todoApi.saveTodos(updatedTodoList);
    }
}