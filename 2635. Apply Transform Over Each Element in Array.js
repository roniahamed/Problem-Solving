/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const transformArry = [];
    const le = arr.length;
    for (let i = 0; i < le; i++) {
        transformArry[i] = fn(arr[i], i);
    }
    return transformArry;
};