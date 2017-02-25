const {Component, PropTypes} = React;

const Item = ({value, onEdit, onDelete}) => {
	return (
		<div className="ui horizontal segment grid stackable">
			<div className="ui twelve wide column">
				<h4>{value}</h4>
			</div>
			<div className="ui right four wide column">
				<Button flavor="primary" onClick={() => onEdit && onEdit()}>
					<i className="edit icon"></i> Edit
				</Button>
				<Button flavor="negative" onClick={() => onDelete && onDelete()}>
					<i className="delete icon"></i> Delete
				</Button>
			</div>
		</div>
	);
};

Item.propTypes = {
	value: PropTypes.string,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func
};

window.Item = Item;