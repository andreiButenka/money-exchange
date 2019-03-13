// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

  if (currency <= 0) {
    return {};
  }

  let result = {};
  let h, q, d, n, p;

  h = currency / 50;
  q = (currency - (~~h * 50)) / 25;
  d = (currency - ((~~h * 50) + (~~q * 25))) / 10;
  n = (currency - ((~~h * 50) + (~~q * 25) + (~~d * 10))) / 5;
  p = (currency - ((~~h * 50) + (~~q * 25) + (~~d * 10) + (~~n * 5))) / 1;
  
  if (~~h > 0) {
    result.H = ~~h;
  }
  if (~~q > 0) {
    result.Q = ~~q;
  } 
  if (~~d > 0) {
    result.D = ~~d;
  } 
  if (~~n > 0) {
    result.N = ~~n;
  } 
  if (~~p > 0) {
    result.P = ~~p;
  }

  return result;
}
