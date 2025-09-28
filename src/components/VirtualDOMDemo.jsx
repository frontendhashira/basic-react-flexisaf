import { useState } from "react";

const steps = [
	{
		title: "State Changes",
		desc: "When state updates, React creates a new Virtual DOM tree",
	},
	{
		title: "Diffing",
		desc: "React compares (diffs) the new tree with the previous tree",
	},
	{
		title: "Reconciliation",
		desc: "Only the changed elements are updated in the real DOM",
	},
	{
		title: "Performance",
		desc: "This process is much faster than updating the entire DOM",
	},
];

const VirtualDOMDemo = () => {
	const [updates, setUpdates] = useState(0);
	const [lastUpdate, setLastUpdate] = useState(null);

	const handleVirtualDOMUpdate = () => {
		setUpdates((prev) => prev + 1);
		setLastUpdate(new Date().toLocaleTimeString());
		console.log("Virtual DOM: Component re-rendered due to state change");
	};

	return (
		<section className="section virtual-dom-demo">
			<h3>Virtual DOM Demonstration</h3>

			<div className="virtual-dom-explanation">
				<h4>How Virtual DOM Works:</h4>
				<ol className="explanation-list">
					{steps.map(({ title, desc }) => (
						<li key={title}>
							<strong>{title}:</strong> {desc}
						</li>
					))}
				</ol>
			</div>

			<div className="virtual-dom-demo-section">
				<h4>Live Virtual DOM Update:</h4>
				<p>
					Updates count: <span className="update-count">{updates}</span>
				</p>
				<p>
					Last update:{" "}
					<span className="last-update">{lastUpdate || "Never"}</span>
				</p>
				<button
					type="button"
					onClick={handleVirtualDOMUpdate}
					className="btn btn--primary"
				>
					Trigger Virtual DOM Update
				</button>
				<p className="note">
					Check the console to see re-render logs. Only this component
					re-renders, not the entire page!
				</p>
			</div>
		</section>
	);
};

export default VirtualDOMDemo;
