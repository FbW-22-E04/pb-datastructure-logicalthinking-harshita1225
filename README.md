# Logical Thinking III

Write pseudo-code for the following exercises on pen and paper.

#### 1. Lowest to Highest
Given an array of numbers from 1-9: 
```javascript
[4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
```
Sort the array from lowest value to highest.
> * Let `arrayNumbers` be the array.
> * Loop through the `arrayNumbers`. 
> * Compare one number e.g. `4` to each other number. 
> * Order the `arrayNumbers` depending on whether the element is lesser or greater than 4. (Swap the number if they are in the wrong order).
> * Loop again using another number as the comparison. Repeat until the array is sorted from lowest to highest
> * [Visual Reference](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)


#### 2. Alphabetical Order
Given an array of names:
```javascript
["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
```
Sort the array based on alphabetical order from `a → z`. 

> * Let `arrayNames` be the array.
> * Loop through the array and make sure each element is lower case. 
> * Based on the ascii table, loop through the `arrayNames` and find the lowest first character value. Move this to the top. 
> * Depending on that value, loop through and find the second lowest value. Repeat this until the whole `arrayNames` is ordered alphabetically. 
> * [Visual Reference](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)

**Bonuses**
1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript. 

2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings. 
