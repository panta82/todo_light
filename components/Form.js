const {PropTypes} = React;

const Form = ({onSubmit, className, children}) => {
	const submitHandler = (e) => {
		e.preventDefault();
		onSubmit && onSubmit();
	};
	
	return (
		<form className={className} onSubmit={submitHandler}>
			{children}
		</form>
	);
};

Form.propTypes = {
	className: PropTypes.string,
	onSubmit: PropTypes.func
};

window.Form = Form;