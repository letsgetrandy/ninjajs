function yo(fn) {
	if (fn instanceof Function) {
		this.listeners.push(fn);
	} else {
		_.each(this.listeners, function (listener) {
			listener(fn);
		})
	}
}
