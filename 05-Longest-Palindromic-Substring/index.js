/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var array = Array.from(s);              //将字符串转换为数组
    var start = parseInt(array.length/2);   //奇数取中间，偶数取中间两位靠后一位
    console.log(start);
};


longestPalindrome("aabcsde");