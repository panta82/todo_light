const {Component, PropTypes} = React;

const TodoItem = ({value, done = false, onDoneChanged, onEdit, onDelete}) => {
	let className = 'TodoItem';
	if (done) {
		className += ' done';
	}
	return (
		<TodoContainer
			className={className}
			left={
				<DoneButton done={done} onChange={onDoneChanged} />
			}
			center={
				<h3 className="TodoItem-label ui header">{value}</h3>
			}
			right={
				<div>
					<Button flavor="primary" onClick={() => onEdit && onEdit()}>
						<i className="edit icon"></i> Edit
					</Button>
					<Button flavor="negative" onClick={() => onDelete && onDelete()}>
						<i className="trash icon"></i> Delete
					</Button>
				</div>
			}
		/>
	);
};

TodoItem.propTypes = {
	value: PropTypes.string,
	done: PropTypes.bool,
	onDoneChanged: PropTypes.func,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func
};

window.TodoItem = TodoItem;