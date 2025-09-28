const WelcomeMessage = ({ userName, theme }) => {
	return (
		<section className={`welcome-card ${theme} section`}>
			<h2>Welcome, {userName}!</h2>
			<p>
				This demonstrates <strong>Props</strong> passing data to components
			</p>
		</section>
	);
};

export default WelcomeMessage;
