exports.count=require("./count");
module.exports=function(){ return sizeof.apply(exports,arguments) };

function sizeof(mixed_var, mode) {
  //  discuss at: http://phpjs.org/functions/sizeof/
  // original by: Philip Peterson
  //  depends on: count
  //   example 1: sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE');
  //   returns 1: 6
  //   example 2: sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
  //   returns 2: 6

  return this.count(mixed_var, mode);
}