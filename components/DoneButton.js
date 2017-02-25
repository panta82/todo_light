const {Component, PropTypes} = React;

const DoneButton = ({onChange, done = false}) => {
	let className = 'circular icon';
	if (done) {
		className += ' basic';
	}
	return (
		<Button className={className} flavor='positive' onClick={() => onChange && onChange(!done)}>
			<i className="checkmark icon"></i>
		</Button>
	);
};

DoneButton.propTypes = {
	onChange: PropTypes.func,
	done: PropTypes.bool
};

window.DoneButton = DoneButton;