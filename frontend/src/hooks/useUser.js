import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

export const useUser = () => {
	const { user, setUser } = useContext(AuthContext);

	const fetchUser = () => {
		return user;
	};

	const saveUser = (user) => {
		setUser(user);
	};

	const removeUser = () => {
		setUser(null);
	};

	return { user, fetchUser, saveUser, removeUser };
};
