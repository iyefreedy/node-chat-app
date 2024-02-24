import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import reactLogo from "../assets/react.svg";

const Chat = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const sendMessage = (event) => {
		event.preventDefault();
		setMessages([...messages, message]);
		setMessage("");
	};

	useEffect(() => {
		fetch("http://localhost:3000/api/users");
	}, []);

	return (
		<>
			<nav className="sticky z-50 w-full bg-white px-6 py-3 shadow-md">
				<div className="flex items-center justify-between">
					<Link to={"/"}>
						<img src={reactLogo} alt="React Logo" />
					</Link>

					<div>
						<Link to={"/"}>Logout</Link>
					</div>
				</div>
			</nav>

			<main>
				<ul>
					{messages.map((msg) => (
						<li key={msg}>{msg}</li>
					))}
				</ul>

				<form
					onSubmit={sendMessage}
					className="fixed bottom-0 left-0 right-0 flex p-2 bg-slate-700"
				>
					<input
						type="text"
						autoComplete="off"
						className="flex-grow"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className="p-2 bg-teal-700 text-white">Send</button>
				</form>
			</main>
		</>
	);
};

export default Chat;
