import { useId } from "react";

const Header = ({ handleThemeToggle, handleUserNameChange, theme, currentUser }) => {
	const id = useId();

	return (
		<header className="app-header">
			<h1 className="app-title">React.js Basics</h1>
			<p className="app-subtitle">
				Complete demonstration of React fundamentals
			</p>

			<div className="app-controls">
				<div className="control-group">
					<label htmlFor="username">Your Name:</label>
					<input
						id={id}
						type="text"
						value={currentUser}
						onChange={handleUserNameChange}
						className="user-input"
					/>
				</div>
				<button
					type="button"
					onClick={handleThemeToggle}
					className="btn btn--secondary"
				>
					{theme === "dark" ? "Light" : "Dark"} Theme
				</button>
			</div>
		</header>
	);
};

export default Header;
