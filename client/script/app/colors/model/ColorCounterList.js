function ColorCounterList (counters) {
	var counters = counters.slice();
	
	this.forEach = Array.prototype.forEach.bind(counters);
	
	return this;
}