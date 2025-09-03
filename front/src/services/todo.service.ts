import instance from "@/services/api/innterceptors.api.ts";
import {getTodo, getTodoList, updateTodo} from "@/config/api.config.ts";
import type {UpdateTodo} from "@/types/todo.type.ts";

export  const TodoService = {
    get: () =>
        instance({
            method: 'GET',
            url: getTodoList()
        }),
    getOne: (id: string) =>
        instance({
            method: 'GET',
            url: getTodo(id)
        }),
    update: (id: string, data: Partial<UpdateTodo>) =>
        instance({
            method: 'PUT',
            url: updateTodo(id),
            data
        })
}