import toast from "react-hot-toast";

export const tostik = {
    success: (message: string) => {
        toast.success(message, {
            style: {
                borderRadius: "10px",
                background: "#246300",
                color: "#fff",
            }
        });
    },
    error: (message: string) => {
        toast.error(message, {
            style: {
                borderRadius: "10px",
                background: "#f56565",
                color: "#fff",
            }
        });
    },
};

export default tostik;