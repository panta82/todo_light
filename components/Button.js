const {PropTypes} = React;

const Button = ({className = '', onClick, flavor = null, children}) => {
	className += ' ui button small';
	if (flavor) {
		className += ' ' + flavor;
	}
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	flavor: PropTypes.string
};

window.Button = Button;