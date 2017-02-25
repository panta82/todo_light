const {Component, PropTypes} = React;

const TodoItem = ({value, onEdit, onDelete}) => {
	return (
		<TodoContainer
			left={
				<h3>{value}</h3>
			}
			right={
				<div>
					<Button flavor="primary" onClick={() => onEdit && onEdit()}>
						<i className="edit icon"></i> Edit
					</Button>
					<Button flavor="negative" onClick={() => onDelete && onDelete()}>
						<i className="delete icon"></i> Delete
					</Button>
				</div>
			}
		/>
	);
};

TodoItem.propTypes = {
	value: PropTypes.string,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func
};

window.TodoItem = TodoItem;