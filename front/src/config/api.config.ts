export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const API_URL = `${SERVER_URL}/api`;

export const getTodoList = () => '/todos'
export const deleteTodo = (id: string) => `/todos/${id}`
export const getTodo = (id: string) => `/todos/${id}`
export const updateTodo = (id: string) => `/todos/${id}`
export const getApi = () => `/`
