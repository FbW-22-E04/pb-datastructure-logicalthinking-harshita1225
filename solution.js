//sorting

let array1 = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

array1.sort(function (a, b) {
  return a - b;
});

console.log(`lowest to highest`, array1);

array1.sort(function (a, b) {
  return b - a;
});

console.log(`highest tos lowest`, array1);

//sorting strings

const names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

names.sort();
console.log(" A  to Z", names);

names.sort().reverse();
console.log(`Z to A`, names);

//bonus

const names2 = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

function sortLength(arr1) {
  const result = arr1.map((item) => item.length).sort();
  return result;
}
console.log("------------------->", sortLength(names2));

names2.sort(function (a, b) {
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return a.length - b.length;
});

console.log(names2);
