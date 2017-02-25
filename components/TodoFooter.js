const {Component, PropTypes} = React;

const TodoFooter = ({data, onNew}) => {
	const completed = data.reduce((count, todo) => {
		return todo.done ? count + 1 : count;
	}, 0);
	const total = data.length;
	
	const statusStr = total > 1
		? `You have completed ${completed} out of ${total} TODOs`
		: total === 1
			? 'You have a single ' + (completed ? 'completed' : 'incomplete') + ' TODO'
			: 'You have no TODO-s. Why not create some?';

	return (
		<TodoContainer
			borderless
			center={
				<em>{statusStr}</em>
			}
			right={
				<div className="text right">
					<Button flavor="primary" onClick={() => onNew && onNew()}>
						<i className="add circle icon"></i> Create new
					</Button>
				</div>
			}
		/>
	);
};

TodoFooter.propTypes = {
	count: PropTypes.number,
	onNew: PropTypes.func
};

window.TodoFooter = TodoFooter;