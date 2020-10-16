/*
------- Um tipo de vetor -------
function Vetor(x, y) {
    this.x = x;
    this.y = y;
}

Vetor.prototype.soma = function(params) {
    return new Vetor(this.x + params.x, this.y + params.y);
};

Vetor.prototype.subtrai = function(params) {
    return new Vetor(this.x - params.x, this.y - params.y);
};

Object.defineProperty(Vetor.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vetor(2, 2).soma(new Vetor(3, 3)));
console.log(new Vetor(2, 2).subtrai(new Vetor(3, 3)));
console.log(new Vetor(2, 2).length);
*/

/*
------- Outra célula -------
*/
function AumentarLinha(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

AumentarLinha.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
AumentarLinha.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
AumentarLinha.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new AumentarLinha(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

/*
------- Interface sequencial -------
*/