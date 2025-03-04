import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./css/normalize.css";
import "./css/skeleton.css";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/not_found/page.tsx";
import About from "./routes/about/page.tsx";
import Contact from "./routes/contact/page.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: "/sobre",
		element: <About />,
		errorElement: <NotFound />,
	},
	{
		path: "/contato",
		element: <Contact />,
	},
]);
const isPathValid = !!(
	window.location.pathname === "/" ||
	window.location.pathname === "/sobre" ||
	window.location.pathname === "/contato"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{isPathValid && <Header />}
		<RouterProvider router={router} />
		{isPathValid && <Footer />}
	</React.StrictMode>
);
