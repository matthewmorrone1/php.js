module.exports=function(){ return expm1.apply(exports,arguments) };

function expm1(x) {
  //  discuss at: http://phpjs.org/functions/expm1/
  // original by: Brett Zamir (http://brett-zamir.me)
  //        note: Precision 'n' can be adjusted as desired
  //   example 1: expm1(1e-15);
  //   returns 1: 1.0000000000000007e-15

  var ret = 0,
    n = 50; // degree of precision
  var factorial = function factorial(n) {
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      var result = (n * factorial(n - 1));
      return result;
    }
  };
  for (var i = 1; i < n; i++) {
    ret += Math.pow(x, i) / factorial(i);
  }
  return ret;
}