async function login(credential) {
	const { email, password } = credential;

	const response = await fetch("http://localhost:3000/login", {
		method: "POST",
		body: JSON.stringify({
			email: email,
			password: password,
		}),
		credentials: "include",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response;
}

async function logout() {
	console.log("Logout");
}

export default { login, logout };
