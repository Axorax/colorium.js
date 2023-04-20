function colorium(s) {
    return s;
}

function l() {
    console.log(this.toString());
}

const g = (s, f) => {
    String.prototype.__defineGetter__(s, f);
}

const x = (s, b, e) => {
    return b + s.toString() + e;
}

String.prototype.log = l;

g("black", function() {return x(this, '\x1b[30m', '\x1b[39m')});
g("red", function() {return x(this, '\x1b[31m', '\x1b[39m')});
g("green", function() {return x(this, '\x1b[32m', '\x1b[39m')});
g("yellow", function() {return x(this, '\x1b[33m', '\x1b[39m')});
g("blue", function() {return x(this, '\x1b[34m', '\x1b[39m')});
g("magenta", function() {return x(this, '\x1b[35m', '\x1b[39m')});
g("cyan", function() {return x(this, '\x1b[36m', '\x1b[39m')});
g("white", function() {return x(this, '\x1b[37m', '\x1b[39m')});
g("gray", function() {return x(this, '\x1b[90m', '\x1b[39m')});

g("bgBlack", function() {return x(this, '\x1b[40m', '\x1b[49m')});
g("bgRed", function() {return x(this, '\x1b[41m', '\x1b[49m')});
g("bgGreen", function() {return x(this, '\x1b[42m', '\x1b[49m')});
g("bgYellow", function() {return x(this, '\x1b[43m', '\x1b[49m')});
g("bgBlue", function() {return x(this, '\x1b[44m', '\x1b[49m')});
g("bgMagenta", function() {return x(this, '\x1b[45m', '\x1b[49m')});
g("bgCyan", function() {return x(this, '\x1b[46m', '\x1b[49m')});
g("bgWhite", function() {return x(this, '\x1b[47m', '\x1b[49m')});
g("bgGray", function() {return x(this, '\x1b[100m', '\x1b[49m')});

g("lightBlack", function() {return x(this, '\x1b[90m', '\x1b[39m')});
g("lightRed", function() {return x(this, '\x1b[91m', '\x1b[39m')});
g("lightGreen", function() {return x(this, '\x1b[92m', '\x1b[39m')});
g("lightYellow", function() {return x(this, '\x1b[93m', '\x1b[39m')});
g("lightBlue", function() {return x(this, '\x1b[94m', '\x1b[39m')});
g("lightMagenta", function() {return x(this, '\x1b[95m', '\x1b[39m')});
g("lightCyan", function() {return x(this, '\x1b[96m', '\x1b[39m')});
g("lightWhite", function() {return x(this, '\x1b[97m', '\x1b[39m')});

g("bgLightBlack", function() {return x(this, '\x1b[100m', '\x1b[49m')});
g("bgLightRed", function() {return x(this, '\x1b[101m', '\x1b[49m')});
g("bgLightGreen", function() {return x(this, '\x1b[102m', '\x1b[49m')});
g("bgLightYellow", function() {return x(this, '\x1b[103m', '\x1b[49m')});
g("bgLightBlue", function() {return x(this, '\x1b[104m', '\x1b[49m')});
g("bgLightMagenta", function() {return x(this, '\x1b[105m', '\x1b[49m')});
g("bgLightCyan", function() {return x(this, '\x1b[106m', '\x1b[49m')});
g("bgLightWhite", function() {return x(this, '\x1b[107m', '\x1b[49m')});

g("reset", function() {return x(this, '\x1b[0m', '\x1b[0m')});
g("bold", function() {return x(this, '\x1b[1m', '\x1b[22m')});
g("dim", function() {return x(this, '\x1b[2m', '\x1b[22m')});
g("italic", function() {return x(this, '\x1b[3m', '\x1b[23m')});
g("underline", function() {return x(this, '\x1b[4m', '\x1b[24m')});
g("blink", function() {return x(this, '\x1b[5m', '\x1b[25m')});
g("inverse", function() {return x(this, '\x1b[7m', '\x1b[27m')});
g("hidden", function() {return x(this, '\x1b[8m', '\x1b[28m')});
g("strike", function() {return x(this, '\x1b[9m', '\x1b[29m')});
g("overline", function() {return x(this, '\x1b[53m', '\x1b[55m')});

String.prototype.hex = function(h) {
    h = h.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b) {return r + r + g + g + b + b;});
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return r ? `\x1b[38;2;${parseInt(r[1], 16)};${parseInt(r[2], 16)};${parseInt(r[3], 16)}m` + this.toString() + '\x1b[39m' : null
};

String.prototype.rgb = function(r,g,b) {
    return `\x1b[38;2;${r};${g};${b}m` + this.toString() + '\x1b[39m'
};

module.exports = colorium