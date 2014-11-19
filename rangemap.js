var Rangemap = function(points, values) {
	this.points = points || [];
	this.values = values || [];
};

Rangemap.prototype = {
	"equalInRange": true,
	"compare": function(a, b) {
		if (a === b) {
			return this.equalInRange;
		}
		if (a.constructor === b.constructor === String) {
			// for text ranges
			var arr = [a, b];
			if (this.comparator instanceof Function) {
				// allow a custom comparator
				arr.sort(this.comparator);
			} else {
				arr.sort();
			}
			return arr[0] === a;
		} else {
			// for numbered ranges
			if (this.comparator instanceof Function) {
				return this.comparator(a, b);
			} else {
				return a < b;
			}
		}
	},
	"valueForIndex": function(index) {
		var indexOffset = 0,
			valueOffset = 0;
		// if points.length > values.length, assume a minimum value was specified
		if (this.points.length > this.values.length) {
			if (index < this.points[0]) {
				throw 'the specified index was below the minimum range';
				// return undefined;
			}
			indexOffset++;
		}
		while (indexOffset < this.points.length && valueOffset < this.values.length) {
			if (this.compare(index, this.points[indexOffset])) {
				return this.values[valueOffset];
			}
			indexOffset++;
			valueOffset++;
		}
		// if values.length > points.length, assume a global upper value
		if (this.values.length > valueOffset) {
			return this.values[valueOffset];
		}
		return undefined;
	}
};
