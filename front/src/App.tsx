import {RouterEnum} from "@/config/RouterEnum.ts";
import Main from "@/services/main/Main.tsx";
import {Route, type RouteObject, Routes} from "react-router";
// import ApiDescription from "@/services/api-description/ApiDescription.tsx";
import Providers from "@/providers/Providers.tsx";
import ApiDescription from "@/screens/api-description/ApiDescription.tsx";
import Header from "@/components/Header.tsx";
import Todo from "@/screens/todo/Todo.tsx";

export default function App() {

	const routes: Array<RouteObject> = [
		{path: RouterEnum.MAIN, element: <Main />},
		{path: RouterEnum.API_CONFIG, element: <ApiDescription />},
		{path: RouterEnum.TODO, element: <Todo />},
	]



	return (
		<Providers>
			<Header />
			<Routes>
				{routes.map((route, index) =>
					<Route key={index} path={route.path} element={route.element} />
				)}
			</Routes>
		</Providers>

	)
}