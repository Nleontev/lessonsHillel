function removeDuplicates(arr) {
let set = new Set();
arr.map(el => set.add(el))
newArr = Array.from(set);
return newArr;
}
const resultArray = removeDuplicates([1, 3, 21, 2, 3, 2, 2, 3, 1, 5, 9, 9, 7, 7, 7]);
// [1, 2, 3, 5, 9, 7]
console.log(resultArray);