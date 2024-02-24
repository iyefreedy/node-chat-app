import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext({
	user: null,
	setUser: () => {},
});

export const AuthProvider = ({ children }) => {
	const { accessToken, login, logout } = useAuth();

	return (
		<AuthContext.Provider value={(accessToken, login, logout)}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
