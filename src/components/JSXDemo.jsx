const JSXDemo = () => {
	const reactFeatures = [
		"Component-based architecture",
		"Virtual DOM for performance",
		"Unidirectional data flow",
		"Rich ecosystem and community",
	];

	const codeExample = `// JSX Example
const element = <h1>Hello, {name}!</h1>;

// JSX compiles to:
const element = React.createElement(
'h1',
null,
'Hello, ',
name,
'!');
	`;

	const isActive = true;

	return (
		<section className="section jsx-demo">
			<h3>JSX Features Demo</h3>

			<div className="jsx-section">
				<h4 style={{ marginBlockEnd: "4px" }}>JSX Expressions</h4>
				<p>
					Current time: <strong>{new Date().toLocaleTimeString()}</strong>
				</p>
				<p>
					Random number: <strong>{Math.floor(Math.random() * 100)}</strong>
				</p>
				<p>
					Boolean value: <strong>{isActive ? "True" : "False"}</strong>
				</p>
			</div>

			<div className="jsx-section">
				<h4>JSX Lists & Keys</h4>
				<ul className="feature-list">
					{reactFeatures.map((feature) => (
						<li key={feature} className="feature-item">
							{feature}
						</li>
					))}
				</ul>
			</div>

			<div className="jsx-section">
				<h4>JSX vs JavaScript</h4>
				<pre className="code-example">
					<code>{codeExample}</code>
				</pre>
			</div>
		</section>
	);
};

export default JSXDemo;
