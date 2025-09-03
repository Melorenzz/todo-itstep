export interface Todo{
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
export interface UpdateTodo{
    title?: string;
    description?: string;
    status?: string;
}