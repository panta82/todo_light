const KEYS = {
	todos: 'todos'
};

function DataStore(logger) {
	return {
		loadTodos: () => {
			if (!window.localStorage) {
				return [];
			}

			try {
				return JSON.parse(window.localStorage.getItem(KEYS.todos)) || [];
			}
			catch (err) {
				logger.error(err);
				return [];
			}
		},

		saveTodos: (data) => {
			if (!window.localStorage) {
				return false;
			}

			window.localStorage.setItem(KEYS.todos, JSON.stringify(data));
			return true;
		}
	};
}

window.DataStore = DataStore;