/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var number = [3, 4, 3, 12, 323, 93, 6, 9, 3, 2, 23, 356];

/**
 * Method1
 */

/*
var twoSum = function(nums, target) {
    var number = [];
    for (var i = 0; i < nums.length; i++) {
        var index = nums.indexOf(target - nums[i]);
        if (index > -1 && index != i) {
            return [i, index];
        }
    }
};
*/

/**
 * Method2
 */
var twoSum = function(nums, target) {
    var numbersHashMap = new Object();
    nums.forEach((item, index) => {
        numbersHashMap[item] = { value: item, location: index };
    });
    for (var i = 0; i < nums.length; i++) {
        var key = target - nums[i];
        //prevent reuse of the same number
        if (key in numbersHashMap && numbersHashMap[key].location != i) {
            return [i, numbersHashMap[key].location];
        }
    }
};

twoSum(number, 6);
