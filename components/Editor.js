const {Component, PropTypes} = React;

class Editor extends Component {
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
			<div className="ui horizontal segment grid stackable">
				<div className="ui twelve wide column">
					<div className="ui input left icon fluid">
						<i className="pencil icon"></i>
						<input type="text" placeholder="Enter text here"
							value={this.state.value} onChange={this.change} />
					</div>
				</div>
				<div className="ui right four wide column">
					<Button flavor="primary" onClick={this.save}>
						<i className="checkmark icon"></i> Save
					</Button>
					<Button flavor="negative" onClick={this.cancel}>
						<i className="cancel icon"></i> Cancel
					</Button>
				</div>
			</div>
		);
	}
};

window.Editor = Editor;