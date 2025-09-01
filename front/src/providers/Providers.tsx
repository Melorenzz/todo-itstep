import type {FC, PropsWithChildren} from "react";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider.tsx";
import TostifyProvider from "@/providers/TostifyProvider.tsx";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <TostifyProvider>
            <TanstackQueryProvider>
                {children}
            </TanstackQueryProvider>
        </TostifyProvider>
    );
}

;

export default Providers;