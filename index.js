'use strict';

const logger = Logger();
const dataStore = DataStore(logger);

ReactDOM.render(
	<App dataStore={dataStore} />,
	document.getElementById('root')
);
