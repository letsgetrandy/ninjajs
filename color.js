function Color(r, g, b) {
    if (Array.isArray(r)) {
        colors = r;
    } else if (!g && !b) {
        colors = this.asRGB(r);
    } else {
        colors = [r, g, b];
    }
    this.r = colors[0];
    this.g = colors[1];
    this.b = colors[2];
};
Color.prototype = {
    asHex: function() {
        return [this.r, this.g, this.b].map(function(dec) {
            return (256 + dec).toString(16).slice(1);
        }).join('');
    },
    asRGB: function(hex) {
        if (!hex) return [this.r, this.g, this.b];
        return hex.replace(/\#([0-9a-f])([0-9a-f])([0-9a-f])$/i, function(m, r, g, b) {
            // expand 3-digit hex into 6-digit
            return '#' + r + r + g + g + b +b; 
        }).match(/\#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
        .slice(1).map(function(a){return parseInt(a, 16);});
    },
    toString: function() {
        return this.asHex();
    },
    valueOf: function() {
        return (this.r << 16) + (this.g << 8) + this.b;
    }
}
