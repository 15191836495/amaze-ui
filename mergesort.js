<!--
归并排序：
二路归并排序主要运用了“分治算法”，分治算法就是将一个大的问题划分为n个规模较小而结构相似的子问题。
解决掉这些小的问题之后，归并子问题的结果，就得到了“大”问题的解。
-->
console.log("begin");
let mergeSort = function () {
    let merge = (left, right) =>{

        let result = [];                       // result是存放归并后的数组的数组
        let il = 0,ir = 0;                            //左右数组游标;




        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il++]);
            }
            else {
                result.push(right[ir++]);
            }
        }
        while (il < left.length){
            result.push(left[il++]);
        }
        while (ir < right.length){
            result.push(right[ir++]);
        }
        <!--  如果左边的元素比右边的元素小，就将他放到result中，反之把右边的放进result。
              直至有一个数组到头了，就会结束循环，将另一个数组添加到result 的后面。
         -->



        return result;           //返回归并完成的数组
    };         //  并从每个数组的首项开始进行比较，小的元素放到左边，大的元素放到右边。
               // 归并

    let mergeback =  arr =>{
        if (arr.length === 1){
            return arr;              //长度为1不拆分
        }
        let mid = Math.floor(arr.length/2);                          //找到中间值
        let left = arr.slice(0,mid);                                 // 提取下标0到mid-1的元素到左数组
        let right = arr.slice(mid,arr.length);                      // 提取下标mid到length-1的元素到右数组
        return merge(mergeback(left), mergeback(right))      //递归归并返回
    };
        return mergeback(this);
};                                                   //拆分

<!--
注意事项疑惑：
arr.slice(start,end) 从已有的数组中返回选定的元素。
         start 必需。规定从何处开始选取。如果是负数，从尾部倒数开始算起
         end   可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
-->
