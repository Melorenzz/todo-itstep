import instance from "@/services/api/innterceptors.api.ts";
import {getTodoList} from "@/config/api.config.ts";

export  const TodoService = {
    get: () =>
        instance({
            method: 'GET',
            url: getTodoList()
        })
}