const {Component, PropTypes} = React;

class App extends Component {
	static propTypes = {
		dataStore: PropTypes.object.isRequired
	};

	constructor() {
		super();
		this.state = {
			data: [],
			editIndex: null
		};
	}

	componentWillMount() {
		this.setState({
			data: this.props.dataStore.loadTodos()
		});
	}

	onDataChanged() {
		setTimeout(() => {
			this.props.dataStore.saveTodos(this.state.data);
		}, 1);
	}

	save(value) {
		const {editIndex, data} = this.state;
		if (editIndex === null) {
			return;
		}

		if (editIndex < 0) {
			data.push({ value });
		} else {
			data[editIndex] = Object.assign({}, data[editIndex], {
				value
			});
		}

		this.setState({data});
		this.cancel();
		this.onDataChanged();
	}

	cancel() {
		this.setState({editIndex: null});
	}

	edit(index) {
		this.setState({editIndex: index});
	}

	delete(index) {
		const {data} = this.state;
		data.splice(index, 1);
		this.setState({data});
		this.onDataChanged();
	}

	createNew() {
		this.cancel();
		this.setState({editIndex: -1});
	}

	doneChanged(index, done) {
		const todo = this.state.data[index];
		if (todo) {
			todo.done = done;
		}
		this.setState({ data: this.state.data });
		this.onDataChanged();
	}
	
	render() {
		const rows = this.state.data.map((item, index) => {
			if (this.state.editIndex === index) {
				return (
					<TodoEditor key={index}
						value={item.value}
						onSave={value => this.save(value)}
						onCancel={() => this.cancel()} />
				);
			}

			return (
				<TodoItem key={index}
					value={item.value}
					done={item.done}
					onDoneChanged={(done) => this.doneChanged(index, done)}
					onEdit={() => this.edit(index)}
					onDelete={() => this.delete(index)} />
			);
		});

		const lastRow = this.state.editIndex === -1
			? <TodoEditor onSave={value => this.save(value)} onCancel={() => this.cancel()} />
			: <TodoFooter data={this.state.data} onNew={() => this.createNew()} />;

		return (
			<div className="ui container">
				{rows}
				{lastRow}
			</div>
		);
	}
};

window.App = App;