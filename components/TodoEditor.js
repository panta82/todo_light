const {Component, PropTypes} = React;

class TodoEditor extends Component {
	static propTypes = {
		onSave: PropTypes.func,
		onCancel: PropTypes.func,
	};
	
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || ''
		};

		this.change = this.change.bind(this);
		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	change(e) {
		this.setState({ value: e.target.value });
	}

	save() {
		if (this.props.onSave) {
			this.props.onSave(this.state.value);
		}
	}

	cancel() {
		if (this.props.onCancel) {
			this.props.onCancel();
		}
	}

	render() {
		return (
			<TodoContainer
				left={
					<div className="ui input left icon fluid small">
						<i className="pencil icon"></i>
						<input type="text" placeholder="Enter text here"
							value={this.state.value} onChange={this.change} />
					</div>
				}
				right={
					<div>
						<Button flavor="primary" onClick={this.save}>
							<i className="checkmark icon"></i> Save
						</Button>
						<Button flavor="negative" onClick={this.cancel}>
							<i className="cancel icon"></i> Cancel
						</Button>
					</div>
				}
			/>
		);
	}
};

window.TodoEditor = TodoEditor;