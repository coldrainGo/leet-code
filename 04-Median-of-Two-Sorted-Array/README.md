## 4.Median-of-Two-Sorted-Array ##
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

**Example1**

    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0

**Example2**
    
    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
    
此题先根据两个数组长度求出中位数的下标，分奇偶两种情况即可。
然后采用标准的，开辟一个新数组、将有序数组合并的方法，正常合并，并根据之前得到的下标进行计算即可。
时间复杂度为m+n，满足题目要求。
