import LifecycleDemo from "./LifecycleDemo";

const Lifecycle = ({ showLifecycle, toggleLifecycleDemo }) => {
	return (
		<section className="section">
			<div className="lifecycle-container">
				<div className="lifecycle-controls">
					<h2 className="section-title">Component Lifecycle</h2>
					<button
						type="button"
						onClick={toggleLifecycleDemo}
						className="btn btn--primary"
					>
						{showLifecycle ? "Unmount" : "Mount"} Lifecycle Component
					</button>
				</div>
				{showLifecycle && <LifecycleDemo />}
			</div>
		</section>
	);
};

export default Lifecycle;
