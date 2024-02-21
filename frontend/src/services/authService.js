async function login(email, password) {

    const response = await (await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    })).json()

    return response;
}

async function logout() {
    console.log('Logout')
}

async function checkAuthStatus() {

}

export default { login, logout, checkAuthStatus }