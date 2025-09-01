import { useDocumentation } from "@/screens/api-description/hooks/useDocumentation.ts";

const ApiDescription = () => {
    const { data } = useDocumentation();
    console.log(data);

    return (
        <div className="p-6 space-y-6">
            {/* Endpoints */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📌 Endpoints</h2>
                <div className="grid gap-4">
                    {data?.endpoints &&
                        Object.entries(data.endpoints).map(([key, description]) => {
                            const [method, path] = key.split(" ");
                            return (
                                <div
                                    key={key}
                                    className="p-4 rounded-2xl shadow-md bg-white border border-gray-200"
                                >
                                    <div className="flex items-center justify-between mb-2">
                    <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                            method === "GET"
                                ? "bg-green-100 text-green-700"
                                : method === "POST"
                                    ? "bg-blue-100 text-blue-700"
                                    : method === "PUT"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : method === "PATCH"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {method}
                    </span>
                                        <span className="text-sm text-gray-500">{path}</span>
                                    </div>
                                    <p className="text-gray-700">{description}</p>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Todo Statuses */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Todo Statuses</h2>
                <div className="flex gap-3 flex-wrap">
                    {data?.todoStatuses?.map((status) => (
                        <span
                            key={status}
                            className="px-4 py-2 bg-gray-100 rounded-xl shadow text-gray-700 font-medium"
                        >
              {status}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApiDescription;
