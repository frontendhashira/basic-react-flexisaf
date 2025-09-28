const outcomes = [
	{ title: "Virtual DOM", desc: "Efficient updates and rendering" },
	{ title: "State Management", desc: "useState Hook and class state" },
	{ title: "Props", desc: "Data passing between components" },
	{ title: "JSX", desc: "JavaScript XML syntax" },
	{ title: "Components", desc: "Functional and Class components" },
	{ title: "Lifecycle", desc: "Component lifecycle methods" },
	{ title: "Fragments", desc: "Grouping without extra DOM nodes" },
	{ title: "Event Handlers", desc: "User interaction handling" },
];

const LearningOutcomes = () => (
	<section className="section">
		<div className="learning-outcomes">
			<h2 className="section-title">React Concepts Demonstrated</h2>
			<div className="outcomes-grid">
				{outcomes.map(({ title, desc }) => (
					<div key={title} className="outcome-card">
						<h3>{title}</h3>
						<p>{desc}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default LearningOutcomes;
