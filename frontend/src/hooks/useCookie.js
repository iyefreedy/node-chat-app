import cookie from "js-cookie";
import { useState } from "react";

export const useCookie = () => {
	const [item, setItem] = useState(null);

	const set = (key, value) => {
		cookie.set(key, value);
		setItem(value);
	};

	const get = (key, value) => {
		const item = cookie.get(key);
		setItem(value);

		return value;
	};

	const remove = (key) => {
		cookie.remove(key);
		setValue(null);
	};

	return { item, set, get, remove };
};
