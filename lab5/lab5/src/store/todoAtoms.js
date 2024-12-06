import { atom } from 'jotai';

export const todosAtom = atom([]); // Головний атом для списку завдань

export const addTodoAtom = atom(
    null,
    (get, set, task) => {
        const currentTodos = get(todosAtom);
        set(todosAtom, [...currentTodos, { id: Date.now(), task, completed: false }]);
    }
);

export const toggleTodoAtom = atom(
    null,
    (get, set, id) => {
        const currentTodos = get(todosAtom);
        set(
            todosAtom,
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
);

export const deleteTodoAtom = atom(
    null,
    (get, set, id) => {
        const currentTodos = get(todosAtom);
        set(todosAtom, currentTodos.filter((todo) => todo.id !== id));
    }
);
