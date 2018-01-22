/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i< nums.length; i++){
        var index = nums.indexOf(target-nums[i]);
        if(index > -1 && index != i){
            return [i,index];
        }
    }
};