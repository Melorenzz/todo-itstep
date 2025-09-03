import type {UpdateTodo} from "@/types/todo.type.ts";
import {useMutation, useQueryClient } from "@tanstack/react-query";
import {TodoService} from "@/services/todo.service.ts";
import tostik from "@/utils/tostik.ts";

export const useTodoUpdateMutation = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['change-todo'],
        mutationFn: ( data: UpdateTodo) =>
            TodoService.update(id, data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['todos']})
            await queryClient.invalidateQueries({queryKey: ['todos', id]})
            tostik.success('Todo created!')
        },

    })
}