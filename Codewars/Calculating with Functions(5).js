function assertEquals(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function zero(operation) {
  return assertEquals(0, operation);
}
function one(operation) {
  return assertEquals(1, operation);
}
function two(operation) {
  return assertEquals(2, operation);
}
function three(operation) {
  return assertEquals(3, operation);
}
function four(operation) {
  return assertEquals(4, operation);
}
function five(operation) {
  return assertEquals(5, operation);
}
function six(operation) {
  return assertEquals(6, operation);
}
function seven(operation) {
  return assertEquals(7, operation);
}
function eight(operation) {
  return assertEquals(8, operation);
}
function nine(operation) {
  return assertEquals(9, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return Math.floor(y * x);
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

console.log(assertEquals(seven(times(five()))));
