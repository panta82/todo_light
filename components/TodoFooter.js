const {Component, PropTypes} = React;

const TodoFooter = ({count, onNew}) => {
	const countStr = count > 1
		? `You have ${count} TODOs`
		: count === 1
			? 'You have one TODO'
			: 'You have no TODO-s. Why not create some?';

	return (
		<TodoContainer
			borderless
			left={
				<em>{countStr}</em>
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