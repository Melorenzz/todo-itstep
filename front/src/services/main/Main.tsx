import {useTodosQuery} from "@/services/main/hooks/useTodosQuery.ts";

const Main = () => {
    const {data} = useTodosQuery()
    console.log(data)
    return (
        <div className="grid gap-4">
            {data?.map((todo) => (
                <div
                    key={todo.id}
                    className="p-4 rounded-2xl shadow-md bg-white border border-gray-200"
                >
                    <h2 className="text-lg font-semibold text-gray-800">{todo.title}</h2>
                    <p className="text-gray-600">{todo.description}</p>

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span
            className={`px-2 py-1 rounded-lg ${
                todo.status === "done"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {todo.status}
        </span>
                        <span>{new Date(todo.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Main;