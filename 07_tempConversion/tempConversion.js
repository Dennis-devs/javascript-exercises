const ftoc = function(temp) {
  console.log(Math.round((temp - 32) * (5/9) * 10) / 10);
  return Math.round((temp - 32) * (5/9) * 10) / 10;
};
ftoc(32)
ftoc(100)
ftoc(-100)
const ctof = function(temp) {
  console.log(Math.round(((temp * 9/5) + 32) * 10) / 10);
  return Math.round(((temp * 9/5) + 32) * 10) / 10;

};
ctof(0)
ctof(73.2)
ctof(-10)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
