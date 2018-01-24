## 1. Two Sum ##
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example**

    Given nums = [2, 7, 11, 15], target = 9,
    
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

此题最容易的解法直接暴力使用二重循环，将两个数在数组中的索引返回即可，该方法时间复杂度为O(n^2)。
在二重循环的基础上简化了代码，使用Array对象自带的indexOf方法找到目标数，代码如下
    
    /**
      * @param {number[]} nums
      * @param {number} target
      * @return {number[]}
      */
    var twoSum = function(nums, target) {
      var number = [];
      for (var i = 0; i < nums.length; i++) {
        var index = nums.indexOf(target - nums[i]);
        if (index > -1 && index !== i) {
          return [i, index];
        }
      }
    }
 
 Array.prototype.indexOf()方法属于线性查找，即挨个遍历，找到则返回该元素的位置，未找到返回-1，该方法时间复杂度为O(n)。所以算法总体的时间复杂度
 仍为O(n^2)。
 
 故而想到了使用Hash表存储数据，将数组中的每个数设为键，这样循环遍历数组，*target*(目标数）- *nums[i]*(当前数)得到需要的数，再去构造的对象中去
 寻找有无需要的属性名（即前面需要的数），对象的属性名是以hash数据结构存储的，平均时间复杂度为O(1)。故而该算法时间复杂度为O(n) * O(1)，代码如下
    
	/**
      * @param {number[]} nums
      * @param {number} target
      * @return {number[]}
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
    }
   
  在实现的过程中意外发现，在log生成的hash对象时,里面的元素是会根据键值从大到小排序打印的。
  此方法巧妙的处理了出现相同元素的情况，当数组为 [3,4,3] 目标数为6 这种情况时,会返回[0,2]而不是[0,0],
  数组为[3,4,3,3]目标数为6时，只会返回[0,3]这种情况。具体原因自己琢磨下吧。    

 

