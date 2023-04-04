// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzbus = (array) => {
  let newArray = [];
  array.forEach((element) => {
    const isMultiple3 = element % 3 === 0;
    const isMultiple5 = element % 5 === 0;

    if (isMultiple3 && isMultiple5) {
      newArray.push("fizzbuss");
      return;
    }

    if (isMultiple3) {
      newArray.push("fizz");
      return;
    }

    if (isMultiple5) {
      newArray.push("buzz");
      return;
    }

    newArray.push(element);
  });

  return newArray;
};

export const Main = () => {
  const data = fizzbus([1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 30]);
  console.log(data);
};
