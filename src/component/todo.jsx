import { useState } from 'react';

// Recommended component name is TodoApp (PascalCase)
const TodoApp = ({}) => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    
    // --- Task Submission (Add) ---
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() === '')
            return;

        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setInput('');
    }

    // --- Toggle Completion Status ---
    // You correctly named this function 'Completed'
    const Completed = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((task) =>
                // Map over the list, flip the 'completed' status for the matching ID
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const DeleteTask = (id) => {
    // setTodos updates the state with the result of the filter function
    setTodos((prevTodos) => 
        // filter() creates a NEW array containing only tasks whose IDs DO NOT match the deleted ID
        prevTodos.filter((task) => task.id !== id)
    );
};

    
    return (
        <div className='items-center justify-center bg-white max-w-md mx-auto w-full p-10 m-20 shadow-2xl border-gray-500 border-2 transition'>
            <h1 className='text-center font-bold text-blue-700 text-2xl m-2'>Daily Tasks</h1>
            
            {/* Input Form */}
            <form onSubmit={handleSubmit} className='grid'>
                <input 
                    placeholder='Enter Your Task' 
                    type='text' 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    className=' mt-5 border border-gray-500 rounded-b-lg border-4'
                />
                <button
                    type="submit"
                    className="mt-5 px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:scale-105 mx-auto block"
                >
                    Submit
                </button>
            </form>

            {/* Task List Display */}
            <div className='mt-8 space-y-3'>
                {todos.map((task) => {
                    
                    // 💥 FIX 1 & 3: Define the classes INSIDE the map function where 'task' is defined
                    const statusButtonClasses = `
                        px-3 py-1 text-sm font-semibold rounded-full text-white cursor-pointer transition-colors duration-200
                        ${task.completed
                            ? 'bg-green-600 hover:bg-green-700' // Completed: GREEN
                            : 'bg-red-600 hover:bg-red-700'     // Pending: RED
                        }
                    `;
                    
                    // Optional: Line-through text for completed tasks
                    const textClasses = task.completed ? 'line-through text-gray-500' : 'text-gray-800';

                    return (
                        <div 
                            key={task.id} 
                            className='flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm border-l-4 border-blue-500'
                        >
                            <span className={textClasses}>
                                {task.text}
                            </span>
                            
                            {/* 💥 FIX 2: Call the correct function: 'Completed' */}
                            <button
                                className={statusButtonClasses}
                                onClick={() => Completed(task.id)} 
                               
                            >
                                {/* Display text based on status */}
                                {task.completed ? "Completed" : "Pending"}
                            </button>

                             <button
                        onClick={() => DeleteTask(task.id)} // Call the new delete function
                        className="p-1 text-gray-400 hover:text-red-600 transition duration-150"
                        aria-label="Delete Task"
                    >
                        {/* A simple SVG Trash Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 100 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                        </svg>
                    </button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TodoApp; // Export with the corrected name