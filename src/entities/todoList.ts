import * as Todo from "./todo";

export type TodoList = Todo.Todo[];

export function create(): TodoList {
    return [];
}

export function addTodo(todoList: TodoList, title: string): TodoList {
    return [
        ...todoList,
        Todo.create(title)
    ];
}

export function toggleTodo(todoList: TodoList, todoToToggle: Todo.Todo): TodoList {
    return todoList.map(todo => todo.title === todoToToggle.title ? Todo.toggle(todo) : todo);
}