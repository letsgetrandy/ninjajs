/**
 * Returns TRUE if all arguments passed in can be evaluated as true.
 * Otherwise, returns FALSE.
 */	
function all() {
  var i, l = arguments.length;
  for (i = 0; i < l; i++) {
    if (!arguments[i]) {
      return false;
    }
  }
  return true;
}
