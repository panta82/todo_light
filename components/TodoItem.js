const {Component, PropTypes} = React;

const NormalButtons = ({onEdit, onDelete}) => {
	return (
		<div>
			<Button flavor="primary" onClick={() => onEdit && onEdit()}>
				<i className="edit icon"></i> Edit
			</Button>
			<Button flavor="negative" onClick={() => onDelete && onDelete()}>
				<i className="trash icon"></i> Delete
			</Button>
		</div>
	);
};

const DeletingButtons = ({onCancel, onDelete}) => {
	return (
		<div>
			<Button onClick={() => onCancel && onCancel()}>
				<i className="remove icon"></i> Cancel
			</Button>
			<Button flavor="negative" onClick={() => onDelete && onDelete()}>
				<i className="warning sign icon"></i> Confirm delete
			</Button>
		</div>
	);
};

const TodoItem = ({value, done = false, deleting = false, onDoneChanged, onEdit, onDelete, onCancel}) => {
	let className = 'TodoItem';
	if (done) {
		className += ' done';
	}

	const buttons = deleting
		? <DeletingButtons onCancel={onCancel} onDelete={onDelete} />
		: <NormalButtons onEdit={onEdit} onDelete={onDelete} />;

	return (
		<TodoContainer
			className={className}
			left={
				<DoneButton done={done} onChange={onDoneChanged} />
			}
			center={
				<h3 className="TodoItem-label ui header">{value}</h3>
			}
			right={buttons}
		/>
	);
};

TodoItem.propTypes = {
	value: PropTypes.string,
	done: PropTypes.bool,
	deleting: PropTypes.bool,
	onDoneChanged: PropTypes.func,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	onCancel: PropTypes.func
};

window.TodoItem = TodoItem;