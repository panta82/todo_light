const {Component, PropTypes} = React;

const TodoContainer = ({left, right, borderless}) => {
	let className = 'TodoContainer ui segment';
	if (borderless) {
		className += ' basic';
	}
	return (
		<div className={className}>
			<div className="ui TodoContainer-left">
				{left}
			</div>
			<div className="ui TodoContainer-right">
				{right}
			</div>
		</div>
	);
};

TodoContainer.propTypes = {
	left: PropTypes.element,
	right: PropTypes.element,
	borderless: PropTypes.bool
};

window.TodoContainer = TodoContainer;