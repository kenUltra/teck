import "./App.css";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Host from "./pages/Host";
import Matter from "./pages/Matter";
import Airbnb from "./pages/Airbnb";
import Home from "./Component/Home/Home";

const routePage = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Matter />}>
			<Route index element={<Airbnb />} />
			<Route path="/host-house">
				<Route index element={<Host />} />
			</Route>
			<Route path="/AirCover">
				<Route index element={<Home />} />
			</Route>
			<Route path="/search-index">
				<Route index element={<h2>seomthing say mae</h2>} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={routePage} />;
}

export default App;