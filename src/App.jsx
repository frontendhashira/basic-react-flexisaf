import { useEffect, useState } from "react";
import FragmentDemo from "./components/FragmentDemo";
import JSXDemo from "./components/JSXDemo";
import StateDemo from "./components/StateDemo";
import VirtualDOMDemo from "./components/VirtualDOMDemo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Header from "./components/Header";
import LearningOutcomes from "./components/LearningOutcomes";
import LearningSummary from "./components/LearningSummary";
import Lifecycle from "./components/Lifecycle";

const App = () => {
	const [currentUser, setCurrentUser] = useState("Onizaku");
	const [theme, setTheme] = useState("dark");
	const [showLifecycle, setShowLifecycle] = useState(true);

	useEffect(() => {
		console.log("App: Component mounted and ready!");

		return () => console.log("App: Cleanup on unmount");
	}, []);

	useEffect(() => {
		console.log(`App: Theme set to ${theme}`);
	}, [theme]);

	const handleThemeToggle = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	const handleUserNameChange = (event) => {
		setCurrentUser(event.target.value);
	};

	const toggleLifecycleDemo = () => {
		setShowLifecycle((prev) => !prev);
	};

	return (
		<div className={`app ${theme}-theme`}>
			<Header
				handleThemeToggle={handleThemeToggle}
				handleUserNameChange={handleUserNameChange}
				theme={theme}
				currentUser={currentUser}
			/>

			<main className="app-main">
				<WelcomeMessage userName={currentUser} theme={theme} />

				<LearningOutcomes />

				<VirtualDOMDemo />

				<StateDemo />

				<JSXDemo />

				<section className="section">
					<FragmentDemo />
				</section>

				<Lifecycle
					showLifecycle={showLifecycle}
					toggleLifecycleDemo={toggleLifecycleDemo}
				/>

				<LearningSummary />
			</main>
		</div>
	);
};

export default App;
