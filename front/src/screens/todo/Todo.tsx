import {Link, useParams} from "react-router";
import {useTodoQuery} from "@/screens/todo/hooks/useTodoQuery.ts";
import {useState} from "react";
import {useTodoUpdateMutation} from "@/services/main/hooks/useTodoMutation.ts";

const Todo = () => {
    const {id} = useParams<{ id: string }>();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const updateTodoMutation = useTodoUpdateMutation(id!)

    const {data, isLoading, error} = useTodoQuery({id: id!})

    const handleSubmit = () => {
        updateTodoMutation.mutate(
            {
                title: 'title',
                description: 'description'
            }
        )
    }

    return (
        <div className='flex p-5 justify-center'>

            {/* Если загрузка завершена и есть данные */}
            {!isLoading && data && (
                <>
                    <div className="relative max-w-md w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                        {/* Переключатель edit/view */}
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="absolute top-4 right-4 rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 transition"
                        >
                            {isEditing ? "View" : "Edit"}
                        </button>
                        <button onClick={() => handleSubmit()}>
                            update
                        </button>
                        {!isEditing ? (
                            <>

                                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                                    <button
                                        onClick={() => window.history.back()}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                                    >
                                        ←
                                    </button>
                                    <h2 className="text-lg font-semibold text-gray-800">Task details</h2>
                                </div>


                                <div className="p-6 flex flex-col gap-4">

                                    <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>

                                    {/* Описание */}
                                    <p className="text-gray-700 leading-relaxed">{data.description}</p>

                                    {/* ID */}
                                    <span className="text-sm text-gray-500">ID: {data.id}</span>

                                    {/* Статус */}
                                    <div>
            <span
                className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                    data.status === "done"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {data.status === "done" ? "Done ✅" : "In Progress ⏳"}
            </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <form
                                action=""
                                className="relative max-w-md w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-6"
                            >

                            </form>
                        )}
                    </div>
                </>

            )}

            {/* Если данных нет */}
            {!data && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div
                        className="relative max-w-md w-full rounded-2xl border border-red-300 bg-red-50 p-6 shadow-lg text-center">
                        {/* Стрелочка назад */}
                        <Link
                            to="/"
                            className="absolute left-4 top-4 flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                        >
                            ← <span className="text-sm">Back</span>
                        </Link>

                        <div className="flex flex-col items-center gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl">
                                ⚠️
                            </div>
                            <h2 className="text-lg font-semibold text-red-700">Error</h2>
                            <p className="text-sm text-red-600">
                                {error?.message || "No data available"}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );


};

export default Todo;