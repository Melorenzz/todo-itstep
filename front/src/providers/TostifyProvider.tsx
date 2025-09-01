import type {FC, PropsWithChildren} from "react";
import {Toaster} from "react-hot-toast";

const TostifyProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Toaster toastOptions={{
                error: {
                    style: {
                        borderRadius: '10px',
                        background: '#ff1616 ',
                        color: '#fff',
                    }
                },
                success: {
                    style: {
                        borderRadius: '10px',
                        background: '#65ff00',
                        color: '#fff',
                    }
                },
            }} position={'top-right'} />
            {children}
        </>
    );
};

export default TostifyProvider;