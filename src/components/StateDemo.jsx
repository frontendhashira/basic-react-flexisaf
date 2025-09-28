import { useState } from "react";

const StateDemo = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Onizaku");
	const [todos, setTodos] = useState([
		{ id: 1, text: "Learn JSX syntax", completed: true },
		{ id: 2, text: "Understand Virtual DOM", completed: true },
		{ id: 3, text: "Read Manga", completed: false },
		{ id: 4, text: "Listen to podcast", completed: false },
	]);

	const handleIncrement = () => setCount((prevCount) => prevCount + 1);

	const handleDecrement = () => setCount((prevCount) => prevCount - 1);

	const handleReset = () => setCount(0);

	const handleNameChange = (event) => setName(event.target.value);

	const toggleTodo = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") toggleTodo(event.target.id);
	};

	return (
		<section className="section state-demo">
			<h3>State Management Demo</h3>

			<div className="counter-section">
				<h4>Counter (useState Hook)</h4>
				<div className="counter-display">
					<span className="counter-value">{count}</span>
				</div>
				<div className="counter-controls">
					<button
						type="button"
						onClick={handleDecrement}
						className="btn btn--secondary"
					>
						-
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="btn btn--primary"
					>
						Reset
					</button>
					<button
						type="button"
						onClick={handleIncrement}
						className="btn btn--secondary"
					>
						+
					</button>
				</div>
			</div>

			<div className="name-section">
				<h4>Controlled Input (Event Handlers)</h4>
				<input
					type="text"
					value={name}
					onChange={handleNameChange}
					className="user-input"
					placeholder="Enter your name..."
				/>
				<p>
					Hello, <strong>{name}</strong>!
				</p>
			</div>

			<div className="todo-section">
				<h4>Todo List (State Array Management)</h4>
				<ul className="todo-list">
					{todos.map((todo) => (
						<li key={todo.id}>
							<button
								type="button"
								className={`todo-item ${todo.completed ? "completed" : ""}`}
								onClick={() => toggleTodo(todo.id)}
								onKeyDown={(e) => handleKeyDown(e)}
								id={todo.id}
							>
								<span className="todo-checkbox">
									{todo.completed ? "Done" : "Pending"}
								</span>
								<span className="todo-text">{todo.text}</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default StateDemo;
