//  Bonus 1.1
const arrayOfNumbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
const sortNumbers = numberArray => {
  return numberArray.sort();
};
console.log(sortNumbers(arrayOfNumbers));

// Bonus 1.2
const arrayOfNames = ["fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
const sortNames = namesArray => {
  const sortedNames = namesArray.sort((a, b) => a.localeCompare(b));
  return sortedNames;
};
console.log(sortNames(arrayOfNames));

// Bonus 2
const sortArrayLength = arrayOfStrings => {
  const sortedArray = arrayOfStrings.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }
    if (b.length < a.length) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};
console.log(sortArrayLength(["hey", "there", ",", "you're", "sorting"]));
