// Atenção metodo call, apply e bind.
// Atividade 3 nao consegui fazer.

/* 
------- Um tipo de vetor -------

function Vetor(x, y) {
  this.x = x;
  this.y = y;
}

Vetor.prototype.soma = function(other) {
  return new Vetor(this.x + other.x, this.y + other.y);
};

Vetor.prototype.menos = function(other) {
  return new Vetor(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vetor.prototype, "tamanho", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vetor(1, 2).soma(new Vetor(2, 3)));
console.log(new Vetor(1, 2).menos(new Vetor(2, 3)));
console.log(new Vetor(3, 4).tamanho);
*/

/* 
------- Outra célula -------

function IncreaseCell(inside, width, height) {
  this.inside = inside;
  this.width = width;
  this.height = height;
}

IncreaseCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inside.minWidth());
};
IncreaseCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inside.minHeight());
};
IncreaseCell.prototype.draw = function(width, height) {
  return this.inside.draw(width, height);
};

var increaseCell = new IncreaseCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
*/

/* 
------- Interface sequencial -------

// Refazer essa atividade. nao cosegui entender.

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
*/