const {Component, PropTypes} = React;

const wrap = (el, pos) => {
	if (!el) {
		return null;
	}
	return (
		<div className={'ui TodoContainer-' + pos}>
			{el}
		</div>
	);
};

const TodoContainer = ({className = '', left, center, right, borderless}) => {
	className = className + ' TodoContainer ui segment';
	if (borderless) {
		className += ' basic';
	}
	return (
		<div className={className}>
			{wrap(left, 'left')}
			{wrap(center, 'center')}
			{wrap(right, 'right')}
		</div>
	);
};

TodoContainer.propTypes = {
	className: PropTypes.string,
	left: PropTypes.element,
	center: PropTypes.element,
	right: PropTypes.element,
	borderless: PropTypes.bool
};

window.TodoContainer = TodoContainer;