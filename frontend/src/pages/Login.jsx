import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login } = useAuth();

    const submit = (event) => {
        event.preventDefault();

        login(email, password);
    };

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <form
                onSubmit={submit}
                className="w-full max-w-sm bg-white p-6 rounded-md"
            >
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="block w-full rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <button className="block w-full bg-teal-600 text-white py-2 rounded-md">
                    Login
                </button>
            </form>
        </main>
    );
}
