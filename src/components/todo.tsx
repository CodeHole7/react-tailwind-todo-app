import { useState } from "react";
import { iTodo } from "./todoList"
import CloseIcon from "../img/icon8-close.svg";

interface Props {
    todo: iTodo;
    index: number;
    handleComplete: (id: number) => void;
    handleDelete: (id: number) => void;
}

export const Todo = ({
    todo,
    index,
    handleComplete,
    handleDelete
}: Props) => {
    const [updated, setUpdated] = useState(false);
    const [newName, setNewName] = useState(todo.name);

    const handleChange = (name: string) => {
        setNewName(name)
    }



    return (
        <div
            className="flex justify-between group px-6 border-b border:light-gray-blue-200"
        >
            <div className="flex items-center w-full py-4 justify-between">
                <div className="flex items-center w-full py-4">
                    <div className="mr-4" onClick={() => handleComplete(todo.id)}>
                        <button
                            aria-label={`${todo.completed ? 'Mark todo not completed' : 'Mark todo completed'}`}
                            className={`relative flex items-center justify-center rounded-full h-6 w-6 ${todo.completed
                                ? 'bg-gradient-b from-check-background-start to-check-background-end'
                                : 'border border-light-gray-blue-100'
                                }`}
                        >
                            {todo.completed ? (
                                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" className="h-4 w-4" />
                            ) : (
                                <span className="h-[90%] w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></span>
                            )

                            }

                        </button>

                    </div>
                    <div>
                        <span
                            className={`${todo.completed && 'line-through text-light-gray-blue-200'}`}
                        >
                            {todo.name}
                        </span>
                    </div>
                </div>
                <button onClick={() => { handleDelete(todo.id) }} className="float-right">
                    <img className="h-4 w-4" alt="Delete todo" src="https://img.icons8.com/color/48/null/delete-sign--v1.png" />
                </button>

            </div>
        </div>
    )
}