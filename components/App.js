const {Component} = React;

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [{value: 'test'}, {value: 'Test 2'}],
			editIndex: null
		};
	}

	save(value) {
		const {editIndex, items} = this.state;
		if (editIndex === null) {
			return;
		}

		if (editIndex < 0) {
			items.push({value});
		} else {
			items[editIndex] = {value};
		}

		this.setState({items});
		this.cancel();
	}

	cancel() {
		this.setState({editIndex: null});
	}

	edit(index) {
		this.setState({editIndex: index});
	}

	delete(index) {
		const {items} = this.state;
		items.splice(index, 1);
		this.setState({items});
	}

	createNew() {
		this.cancel();
		this.setState({editIndex: -1});
	}
	
	render() {
		const rows = this.state.items.map((item, index) => {
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
					onEdit={() => this.edit(index)}
					onDelete={() => this.delete(index)} />
			);
		});

		const lastRow = this.state.editIndex === -1
			? <TodoEditor onSave={value => this.save(value)} onCancel={() => this.cancel()} />
			: <TodoFooter count={this.state.items.length} onNew={() => this.createNew()} />;

		return (
			<div className="ui container">
				{rows}
				{lastRow}
			</div>
		);
	}
};

window.App = App;