module.exports = function multiply(first, second) {
  // your solution
  // BigInt type is a numeric primitive. 
  // BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
  //  A BigInt is created by appending n to the end of an integer or by calling the constructor.
  
  let mult = (BigInt(first) * BigInt(second)).toString();

  return mult;
}
