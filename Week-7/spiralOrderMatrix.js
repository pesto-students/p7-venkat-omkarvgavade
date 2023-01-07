let mat1 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;
let mat2 = [ [ 1, 2, 3,56 ], [ 4, 5, 6 ,98], [ 7, 8, 9 ,100] ] ;
function getSpiralOrderFromMatrix(mat,n,m) {
    let resultArr = [];
    let left = 0;
    let right =m-1; // m is number of rows
    let top = 0;
    let bottom = n-1; // n is number of columns;
    let count = 0; // to maintain tally of elements so that repeatation can be avoided
    while(count < m*n){
        for(let i = left; i<=right && count<m*n; i++){
            resultArr.push(mat[top][i]);
            count++;
        }
        top++;
        for(let i = top; i<=bottom && count<m*n; i++){
            resultArr.push(mat[i][right]);
            count++;
        }
        right--;
        for(let i = right; i>=left&& count<m*n; i--){
            resultArr.push(mat[bottom][i]);
            count++;
        }
        bottom--;
        for(let i = bottom; i>=top && count<m*n; i--){
            resultArr.push(mat[i][left]);
            count++;
        }
        left++;
       }
  return resultArr;
}
let result1 = getSpiralOrderFromMatrix(mat1,mat1.length,mat1[0].length);
console.log(result1);
let result2 = getSpiralOrderFromMatrix(mat2,mat2.length,mat2[0].length);
console.log(result2);

//Time Complexity :- O(n*m);
//Space Complexity :- O(n*m)