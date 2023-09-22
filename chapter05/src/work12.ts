export {};

const nums1: number[] = [2, 5, 7, 9];
console.log(nums1);

// スプレッド演算子で配列を展開
const nums2: number[] = [3, ...nums1, 10];
console.log(nums2);
