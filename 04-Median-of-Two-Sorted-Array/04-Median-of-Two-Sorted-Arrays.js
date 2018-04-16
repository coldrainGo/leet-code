/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
 	var length1 = nums1.length;
 	var length2 = nums2.length;
 	var length = length1 > length2 ? length2 : length1;
 	var i = 0, j = 0;
	//judge odd or even and get the target index of median  
	var target_index = (length1+length2)%2? [parseInt((length1+length2)/2)]:[parseInt((length1+length2)/2)-1,parseInt((length1+length2)/2)];
	var sort_arr = [];
	while(i < length1 && j < length2){
		if(nums1[i] <= nums2[j]){
			sort_arr.push(nums1[i++]);
		}
		else{
			sort_arr.push(nums2[j++]);
		}
	}

	while(i < length1){
		sort_arr.push(nums1[i++]);
	}
	while(j < length2){
		sort_arr.push(nums2[j++]);
	}
	
	if(target_index.length > 1){
		return (sort_arr[target_index[0]] + sort_arr[target_index[1]])/2;
	}else{
		return sort_arr[target_index[0]];
	}
};

var array1 = [1,3];
var array2 = [2];
findMedianSortedArrays(array1,array2);