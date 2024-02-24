import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { useUser } from "./useUser";
import { useCookie } from "./useCookie";

import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const [accessToken, setAccessToken] = useState(null);
	const { user, saveUser, removeUser } = useUser();
	const { get } = useCookie();
	const navigate = useNavigate();

	useEffect(() => {
		const cookieToken = get("access_token");
		if (cookieToken) {
			setAccessToken(cookieToken);
		} else {
			setAccessToken(null);
		}
	}, []);

	const login = async (credential) => {
		const res = await authService.login(credential);
		if (res.status === 200) {
			const responseBody = await res.json();
			console.log(responseBody);
			setAccessToken(responseBody.access_token);
			saveUser({ ...jwtDecode(responseBody.access_token) });
			navigate("/chat");
		} else {
			throw new Error(res.message);
		}
	};

	const logout = () => {
		removeUser();
	};

	return { user, accessToken, login, logout };
};
