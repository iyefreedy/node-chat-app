import SimpleLayout from "./layout";

export default function Login() {
    return (
        <SimpleLayout>
            <form className="bg-white p-6 rounded-md">
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="block w-full rounded"
                    />
                </div>

                <button className="block w-full bg-teal-600 text-white py-2 rounded-md">
                    Login
                </button>
            </form>
        </SimpleLayout>
    );
}
