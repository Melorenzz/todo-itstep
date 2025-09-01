
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
            <div className="flex items-center gap-2">
                {/* Логотип (можно заменить картинку или SVG) */}
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-xl font-bold text-xl">
                    ✓
                </div>
                <h1 className="text-2xl font-bold text-gray-800">My ToDo</h1>
            </div>

            {/* Справа можно добавить кнопки, например, "Добавить" */}
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition">
                + Add Task
            </button>
        </header>

    );
};

export default Header;