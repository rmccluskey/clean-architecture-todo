export type Todo = {
    title: string;
    creationDate: string;
    isDone: boolean;
}

export function create(title: string): Todo {
    return {
        title,
        creationDate: new Date(Date.now()).toString(),
        isDone: false,
    };
}

export function toggle(todo: Todo) {
    return {
        ...todo,
        isDone: !todo.isDone,
    };
}

export function title(todo: Todo) {
    return todo.title;
}

export function isDone(todo: Todo) {
    return todo.isDone;
}

export function age(todo: Todo) {
    let age = new Date(Date.now() - new Date(todo.creationDate).getTime());
    return `Created: ${age.getMinutes()} minutes ago`
}