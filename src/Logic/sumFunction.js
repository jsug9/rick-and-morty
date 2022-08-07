const test = [100, 20, 10, 5, 2, 1];

function sum(arr) {
  const result = arr.reduce((a, b) => {
    const sumB = b > 20 ? 20 : b;
    return a + sumB;
  }, 0);

  return (callback) => callback(result);
}

sum(test)((result) => console.log(result));
