import {useQuery} from "@tanstack/react-query";
import {TodoService} from "@/services/main/services/todo.service.ts";
import type {Todo} from "@/types/todo.type.ts";

export const useTodosQuery = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => TodoService.get()
            .then(data => data.data.data as Array<Todo>)
    })
}