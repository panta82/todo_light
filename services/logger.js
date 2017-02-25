function Logger() {
	const noop = function () {};
	const errorFn =  console ? (console.error || console.log).bind(console) : noop;
	const logFn =  console ? console.log.bind(console) : noop;

	return {
		error: errorFn,
		log: logFn
	};
}

window.Logger = Logger;