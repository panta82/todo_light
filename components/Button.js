const {PropTypes} = React;

const Button = ({className = '', onClick, flavor = null, submit, children}) => {
	className += ' ui button small';
	if (flavor) {
		className += ' ' + flavor;
	}
	const buttonType = submit ? 'submit' : 'button';
	return (
		<button type={buttonType} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	flavor: PropTypes.string,
	submit: PropTypes.bool
};

window.Button = Button;