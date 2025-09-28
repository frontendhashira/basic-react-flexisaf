const masteredConcepts = [
	{ title: "Virtual DOM", desc: "Efficient rendering and updates" },
	{ title: "State", desc: "Both useState Hook and class state" },
	{ title: "Props", desc: "Data flow between components" },
	{ title: "JSX", desc: "JavaScript XML syntax and expressions" },
];

const implementedFeatures = [
	{ title: "Components", desc: "Functional and class components" },
	{ title: "Lifecycle", desc: "Mount, update, and unmount phases" },
	{ title: "Fragments", desc: "Clean DOM structure" },
	{ title: "Event Handlers", desc: "Interactive user experiences" },
];

const LearningSummary = () => {
	return (
		<section className="section">
			<div className="learning-summary">
				<h2 className="section-title">Learning Summary</h2>

				<div className="summary-content">
					<div className="summary-column">
						<h3>Mastered Concepts:</h3>
						<ul>
							{masteredConcepts.map(({ title, desc }) => (
								<li key={title}>
									<strong>{title}:</strong> {desc}
								</li>
							))}
						</ul>
					</div>

					<div className="summary-column">
						<h3>Implemented Features:</h3>
						<ul>
							{implementedFeatures.map(({ title, desc }) => (
								<li key={title}>
									<strong>{title}:</strong> {desc}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LearningSummary;
