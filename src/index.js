module.exports = function toReadable (number) {
  const num00X = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const num0X0 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numX00 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number >= 0 && number < 10) {
    return num00X[number];
  } else if (number > 10 && number < 20) {
      return num0X0[number - 11];
  } else if (number >= 20 && number < 100 || number === 10) {
      return (number % 10 === 0) ? numX00[Math.floor(number / 10) - 1] : numX00[Math.floor(number / 10) - 1] + ' ' + num00X[number % 10];
  } else if (number >= 100 && number < 1000) {
      if (number % 100 === 0) {
          return `${num00X[number / 100]} hundred`;
      } else if (number % 10 === 0) {
          return `${num00X[Math.floor(number / 100)]} hundred ${numX00[number % 100 / 10 - 1]}`;
      } else if (number % 100 > 10 && number % 100 < 20) {
          return `${num00X[Math.floor(number / 100)]} hundred ${num0X0[number % 100 - 11]}`;
      } else if (number % 100 >= 20 && number % 100 < 100 && Math.floor(number % 100 / 10 - 1) != 0 ) {
          return `${num00X[Math.floor(number / 100)]} hundred ${numX00[Math.floor(number % 100 / 10) - 1]} ${num00X[number % 10]}`;
      } else {
          return `${num00X[Math.floor(number / 100)]} hundred ${num00X[number % 10]}`;
      }
  }
}
