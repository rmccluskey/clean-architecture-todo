import * as Todo from "./todo";

export type TodoList = Todo.Todo[];

export function create(): TodoList {
    return [];
}

export function addTodo(todoList: TodoList, title: string): TodoList {
    const todoExists = todoList.some(todo => Todo.title(todo) === title);
    if (todoExists) {
        throw Error("There is already a Todo with that title!");
    }

    return [
        ...todoList,
        Todo.create(title)
    ];
}

export function removeTodo(todoList: TodoList, todoToRemove: Todo.Todo): TodoList {
    return todoList.filter(todo => todo.title !== todoToRemove.title);
}

export function toggleTodo(todoList: TodoList, todoToToggle: Todo.Todo): TodoList {
    return todoList.map(todo => todo.title === todoToToggle.title ? Todo.toggle(todo) : todo);
}