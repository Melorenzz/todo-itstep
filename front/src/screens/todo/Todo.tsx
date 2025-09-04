import { useNavigate, useParams} from "react-router";
import {useTodoQuery} from "@/screens/todo/hooks/useTodoQuery.ts";
import {useState} from "react";
import {useTodoUpdateMutation} from "@/services/main/hooks/useTodoMutation.ts";
import {cn} from "@/lib/cn.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {UpdateTodo} from "@/types/todo.type.ts";
import {getStatusColor} from "@/helpers/getStatusColor.ts";
import TodoNotFound from "@/screens/todo/features/todo-not-found/TodoNotFound.tsx";
import {formatDate} from "@/helpers/formatDate.ts";

const Todo = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const updateTodoMutation = useTodoUpdateMutation(id!)
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const {data, isLoading} = useTodoQuery({id: id!});

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isDirty, isSubmitting}
    } = useForm<UpdateTodo>({
        defaultValues: {
            title: data?.title || '',
            description: data?.description || '',
            status: data?.status || '',
        }
    })

    const onSubmit: SubmitHandler<UpdateTodo> = (data) => {
        updateTodoMutation.mutate(data, {
            onSuccess: () => {
                setIsEditing(false);
                // reset();
            }
        })
    }


    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!data) {return <TodoNotFound />}

    return (
        <div className={'container mx-auto py-8 px-4 max-w-4xl'}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Деталі завдання</h1>

                <div className="space-x-3">
                    <button
                        onClick={() => setIsEditing((prev) => !prev)}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
                            isEditing
                                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500"
                                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                        )}
                    >
                        {isEditing ? (
                            <span className="flex items-center">
                                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                Перегляд
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Редагувати
                            </span>
                        )}
                    </button>

                    <button
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        onClick={() => navigate(-1)}
                    >
                        <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Назад
                    </button>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {!isEditing ? (
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                            <span className={cn(
                                "px-2 py-1 text-xs font-medium rounded-full",
                                getStatusColor(data.status)
                            )}>
                                {data.status}
                            </span>
                        </div>

                        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Опис:</h3>
                            <p className="text-gray-700 whitespace-pre-wrap">{data.description}</p>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500 mb-1">Ідентифікатор:</p>
                                    <p className="font-medium text-gray-800">{data.id}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 mb-1">Статус:</p>
                                    <p className="font-medium text-gray-800">{data.status}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 mb-1">Створено:</p>
                                    <p className="font-medium text-gray-800">{formatDate(data.createdAt)}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 mb-1">Оновлено:</p>
                                    <p className="font-medium text-gray-800">{formatDate(data.updatedAt)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                    Назва
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className={cn(
                                        "w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-offset-0 focus:outline-none",
                                        errors.title
                                            ? "border-red-300 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                    )}
                                    {...register("title", { required: "Назва обов'язкова" })}
                                />
                                {errors.title && (
                                    <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Опис
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    className={cn(
                                        "w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-offset-0 focus:outline-none",
                                        errors.description
                                            ? "border-red-300 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                    )}
                                    {...register("description", { required: "Опис обов'язковий" })}
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                                )}
                            </div>

                            <div className="flex justify-end pt-4 space-x-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        reset();
                                        setIsEditing(false);
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Скасувати
                                </button>

                                <button
                                    type="submit"
                                    disabled={!isDirty || isSubmitting || updateTodoMutation.isPending}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {(isSubmitting || updateTodoMutation.isPending) ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Збереження...
                                        </>
                                    ) : 'Зберегти зміни'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todo;