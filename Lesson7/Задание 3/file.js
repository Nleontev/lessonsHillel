function createMatrix(n, m) {
    arr = [];
    let number = 1;
    for(i=0;i<n;i++){
        arr[i] = [];
        for(j=0;j<m;j++){
           arr[i][j] = number;
           number++;
        }  
    }
    return arr;
}
const matrixArr = createMatrix(3, 4);
console.log(matrixArr);
// [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]

    