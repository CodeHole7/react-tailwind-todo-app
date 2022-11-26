import React, { useState } from "react";
import { FilterList } from "./filterList";
import { Input } from "./input";
import { Todo } from "./todo";

export interface iTodo {
    id: number;
    name: string;
    completed: boolean;
}

export const TodoList = () => {
    const [filter, setFilter] = useState('all')
    const [todos, setTodos] = useState<iTodo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const itemsLeft = todos.filter(todo => !todo.completed).length;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                id: todos.length + 1,
                name: newTodo,
                completed: false,
            }
        ]);
        setNewTodo('');
    }

    const handleChange = (name: string) => {
        setNewTodo(name)
    }

    const filterResults = () => {
        let results = todos;
        if (filter === 'active') {
            results = results.filter(todo => !todo.completed);
        }
        if (filter === 'completed') {
            results = results.filter(todo => todo.completed);
        }
        return results;
    }

    const handleComplete = (id: number) => {
        const updatedTodos = [...todos];
        const todo = updatedTodos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed
        }
        setTodos(updatedTodos);
    }

    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleCompleteAll = () => {
        const updatedTodos = todos.filter(todo => !todo.completed);
        setTodos(updatedTodos)
    }

    return (
        <main className="flex flex-col items-center relative space-y-4 w-full max-w-xl lg:space-y-6">
            <Input
                newTodo={newTodo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {
                todos.length > 0 && (
                    <>
                        <div className="flex flex-col w-full rounded-lg bg-white lg: shadow-2xl">
                            {filterResults().map((todo, index) => (
                                <Todo
                                    key={index}
                                    todo={todo}
                                    index={index}
                                    handleComplete={handleComplete}
                                    handleDelete={handleDelete}
                                />
                            ))}

                        </div>
                        <div className="flex justify-between px-6 py-4 text-sm text-light-gray-blue-300 items-center">
                            <span>
                                {itemsLeft === 1
                                    ? `${itemsLeft} item left`
                                    : `${itemsLeft} items left`
                                }
                            </span>
                            <div className="hidden lg:block px-6">
                                <FilterList filter={filter} setFilter={setFilter} />
                            </div>
                            <button
                                onClick={handleCompleteAll}
                            >
                                Clear Completed
                            </button>

                        </div>

                        <div className="w-full lg:hidden">
                            <FilterList filter={filter} setFilter={setFilter} />
                        </div>
                    </>
                )
            }
        </main>
    )
}