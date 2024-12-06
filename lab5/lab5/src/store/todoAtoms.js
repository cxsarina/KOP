import { atom } from 'jotai';

const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};
export const todosAtom = atom(loadTodos());

export const todosWithPersistenceAtom = atom(
    (get) => get(todosAtom),
    (get, set, newTodos) => {
        set(todosAtom, newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
);
export const addTodoAtom = atom(
    null,
    (get, set, task) => {
        const currentTodos = get(todosWithPersistenceAtom);
        const updatedTodos = [
            ...currentTodos,
            { id: Date.now(), task, completed: false },
        ];
        set(todosWithPersistenceAtom, updatedTodos);
    }
);

export const toggleTodoAtom = atom(
    null,
    (get, set, id) => {
        const currentTodos = get(todosWithPersistenceAtom);
        const updatedTodos = currentTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        set(todosWithPersistenceAtom, updatedTodos);
    }
);

export const deleteTodoAtom = atom(
    null,
    (get, set, id) => {
        const currentTodos = get(todosWithPersistenceAtom);
        const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
        set(todosWithPersistenceAtom, updatedTodos);
    }
);
