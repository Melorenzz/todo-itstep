import {useTodosQuery} from "@/services/main/hooks/useTodosQuery.ts";
import {Link} from "react-router";
import {formatDate} from "@/helpers/formatDate.ts";
import {cn} from "@/lib/cn.ts";
import {getStatusColor} from "@/helpers/getStatusColor.ts";

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
                    <div className='flex justify-between items-center'>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{todo.title}</h2>
                            <p className="text-gray-600">{todo.description}</p>
                        </div>

                        <div className='flex gap-5 items-center'>

                            <Link to={`/todo/${todo.id}`}>View</Link>
                            <button
                                className="px-4 py-2 rounded-xl bg-red-500/20 border border-red-500/30
             backdrop-blur-md text-red-600 font-medium
             shadow-md hover:bg-red-500/30 hover:text-red-700
             hover:shadow-lg active:scale-95 transition-all duration-300"
                            >
                                🗑 Delete
                            </button>
                        </div>
                    </div>

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            getStatusColor(todo.status)
        )}>
          {todo.status}
        </span>
                        <span>{formatDate(todo.createdAt)}</span>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Main;