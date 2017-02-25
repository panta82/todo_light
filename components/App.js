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
		if (this.state.editIndex === null) {
			return;
		}
		const newItems = this.state.items.slice();
		newItems[this.state.editIndex] = {
			value
		};
		this.setState({items: newItems});
		this.cancel();
	}

	cancel() {
		this.setState({editIndex: null});
	}

	edit(index) {
		this.setState({editIndex: index});
	}

	delete(index) {
		const newItems = this.state.items.slice();
		newItems.splice(index, 1);
		this.setState({items: newItems});
	}
	
	render() {
		const rows = this.state.items.map((item, index) => {
			if (this.state.editIndex === index) {
				return (
					<Editor key={index}
						value={item.value}
						onSave={value => this.save(value)}
						onCancel={() => this.cancel()} />
				);
			}

			return (
				<Item key={index}
					value={item.value}
					onEdit={() => this.edit(index)}
					onDelete={() => this.delete(index)} />
			);
		});

		return (
			<div className="ui container">
				{rows}
			</div>
		);
	}
};

window.App = App;