import instance from "@/services/api/innterceptors.api.ts";
import {getApi} from "@/config/api.config.ts";

export const DocumentationService = {
    get: () =>
        instance({
            method: 'GET',
            url: getApi()
        })
}