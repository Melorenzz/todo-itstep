import {Link} from "react-router";

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
            <div className="flex items-center gap-4">
                {/* Кнопка Add Task */}


                {/* Навигация */}
                <nav className="flex gap-3 items-center">
                    <Link
                        to="/"
                        className="px-3 py-1 rounded-lg bg-white/20 border border-white/40
                 backdrop-blur-md text-gray-900 hover:text-black
                 hover:bg-white/30 transition-all duration-300 font-medium"
                    >
                        Todos
                    </Link>

                    <Link
                        to="/api/config"
                        className="px-3 py-1 rounded-lg bg-white/20 border border-white/40
                 backdrop-blur-md text-gray-900 hover:text-black
                 hover:bg-white/30 transition-all duration-300 font-medium"
                    >
                        Docs
                    </Link>
                    <button
                        className="px-4 py-2 rounded-xl bg-white/30 border border-white/40
               backdrop-blur-md text-black font-semibold
               shadow-md hover:bg-white/40 hover:shadow-lg
               transition-all duration-300"
                    >
                        + Add Task
                    </button>
                </nav>
            </div>

        </header>

    );
};

export default Header;