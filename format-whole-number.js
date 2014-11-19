function fmtWholeNum (num) {
  var n = parseFloat(num.toString().replace(/[^\d\.]+/, '')),
      s = Math.floor(n).toString();
  return s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}
