const test = [100, 101, 20, 10, 5, 2, 1];

function sum(arr) {
  const result = arr.reduce((a, b) => {
    const sumB = (b > 20 && b % 2 === 0) ? 20 : b;
    return a + sumB;
  }, 0);

  return (callback) => callback(result);
}

sum(test)((result) => console.log(result));
