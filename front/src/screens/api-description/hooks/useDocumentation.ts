import {useQuery} from "@tanstack/react-query";
import {DocumentationService} from "@/screens/api-description/services/documentation.service.ts";

export const useDocumentation = () => {
    return useQuery({
        queryKey: ['api'],
        queryFn: () => DocumentationService.get()
            .then(data => data.data.data)
    })
}