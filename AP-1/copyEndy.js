/* We'll say that a positive int n is "endy" if it is in the range 
 * 0..10 or 90..100 (inclusive). Given an array of positive ints, return a 
 * new array of length "count" containing the first endy numbers from the 
 * original array. Decompose out a separate isEndy(int n) method to test if a 
 * number is endy. The original array will contain at least "count" endy 
 * numbers.
 */

console.log(copyEndy([9, 11, 90, 22, 6], 2)) // [9, 90]
console.log(copyEndy([9, 11, 90, 22, 6], 3)) // [9, 90, 6]
console.log(copyEndy([12, 1, 1, 13, 0, 20], 2)) // [1, 1]

function copyEndy(nums, count) {
	 var arr = [];
    var index = 0;
      
    for(var i = 0; index < count; i++) {
        if(isEndy(nums[i])) {
            arr[index] = nums[i];
            index++;
        }
    }
                                
    return arr;
}

function isEndy(n) {
    return 0 <= n && n <= 10 || 90 <= n && n <= 100;
}