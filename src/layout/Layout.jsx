import { useState } from "react";
import { Link } from "react-router-dom";

export function Layout({ children }) {
	const [count, setCount] = useState(0);
	return (
		<>
			<header className="flex justify-between">
				<nav>
					<Link to="/">Home</Link> <Link to="/profile">Profile</Link>{" "}
					<Link to="/example">Example</Link>
				</nav>
				<button onClick={() => setCount(count + 1)}>{count}</button>
			</header>
			<main className="grow">{children}</main>
			<footer>Footer</footer>
		</>
	);
}
