import React from "react"

interface Props {
    newTodo: string;
    handleChange: (name: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const Input = ({ newTodo, handleSubmit, handleChange }: Props) => {
    return (
        <form
            onSubmit={e => handleSubmit(e)}
            className="flex items-center px-6 w-full rounded-lg bg-white"
        >
            <button
                type="submit"
                aria-label="Add todo"
                className="relative mr-4 border aspect-square rounded-full h-6 w-6 border-light-gray-blur-100 cursor-pointer"
            >
                <span className="h-[90%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></span>
            </button>
            <input
                type='text'
                value={newTodo}
                required
                placeholder="Create new todo..."
                className="w-full py-4 font-bold text-sm text-light-gray-blue-300"
                onChange={e => handleChange(e.target.value)}
            />

        </form>
    )
}