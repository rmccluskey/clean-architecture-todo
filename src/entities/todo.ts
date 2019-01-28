export type Todo = {
    title: string;
    creationDate: string;
    isDone: boolean;
};

export function create(title: string): Todo {
    if (!isValid(title)) {
        throw Error("title cannot be empty");
    }
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
    return `Created: ${age.getMinutes()} minutes ago`;
}

export function isValid(title: String) {
    return title && title.trim().length > 0;
}