import { Fragment } from "react";

const FragmentDemo = () => {
	return (
		<>
			<h3 className="fragment-title">React Fragments Demo</h3>
			<p className="fragment-text">
				This section uses React Fragment (short syntax)
			</p>
			<p className="fragment-text">
				Fragments let you group elements without adding extra DOM nodes.
			</p>

			<h4 className="fragment-subtitle">Benefits of Fragments:</h4>
			<ul className="fragment-list">
				<li>Cleaner DOM structure</li>
				<li>Better performance</li>
				<li>Avoids invalid HTML nesting</li>
			</ul>

			<h4 className="fragment-subtitle">Fragment with Keys (in lists):</h4>
			{[1, 2, 3].map((num) => (
				<Fragment key={num}>
					<h5 className="fragment-item-title">Item {num}</h5>
					<p className="fragment-item-desc">Description for item {num}</p>
				</Fragment>
			))}
		</>
	);
};

export default FragmentDemo;
