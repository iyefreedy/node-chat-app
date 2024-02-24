import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Protected from "./pages/Protected";

import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
	const { user, login, logout } = useAuth();

	return (
		<AuthProvider>
			<Routes>
				{" "}
				{/* Ganti RouterProvider dengan Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route element={<Protected />}>
					<Route path="/chat" element={<Chat />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default App;
