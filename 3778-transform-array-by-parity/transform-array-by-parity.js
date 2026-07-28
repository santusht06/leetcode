/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let result = []

    nums.forEach((el)=>{
        if(el % 2 == 0){
            result.push(0)
        }
        else result.push(1)
    })
    return result.sort()
};