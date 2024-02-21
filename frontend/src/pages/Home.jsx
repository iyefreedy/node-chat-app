import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <header className="w-1/2 text-center">
                <h1 className="font-bold text-xl">
                    Welcome to simple chat app
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima aperiam laboriosam nam qui, tempore ex natus illo
                    officia laudantium autem enim! Numquam modi nostrum nisi
                    magni minima, illum itaque. Possimus?
                </p>
            </header>

            <nav className="mt-8">
                <ul className="flex gap-4">
                    <li>
                        <Link
                            to={"/login"}
                            className="py-2 px-6 bg-teal-500 text-white rounded-md"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/chat"}
                            className="py-2 px-6 bg-teal-500 text-white rounded-md"
                        >
                            Go Chat
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
