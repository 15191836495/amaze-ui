<!--
 快速排序:
1.找基准
2.遍历数组,小于基准的放在left,大于基准的放在right
3.递归
 -->
let quick = function (arr) {
    if(arr.length <= 1){
        return arr;
    }                                                               //1.检查数组是否需要排序

    let left = [];
    let right = [];                                              //2.创建两个数组，小于基准放在left，大于等于基准的放在right


    let pivot=arr.splice(Math.floor(arr.length/2),1)[0];                                       //找基准，并把基准从原数组删除

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }                                                       //4.遍历数组，根据它们与基准值的关系放到合适的数组中
    }
    return quick(left).concat([pivot],quick(right));           //5.然后对于两个小数组分别递归调用这个函数
}
   console.log(quick(arr));
<!--
疑问：
1.Math.floor() 返回小于或等于一个给定数字的最大整数 例如：“Math.floor(-45.05);得-46”
推广：Math.round()：四舍五入（小数点后第一位）大于五全部加，等于五正数加，小于五全不加。
      Math.ceil()：返回大于或等于一个给定数字的最大整数 例如：“Math.floor(-45.05);得-45”
2.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
    arr.splice(index,howmany,item1,.....,itemX)
        index                  必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
        howmany                必需。要删除的项目数量。如果设置为 0，则不会删除项目。
        item1, ..., itemX      可选。向数组添加的新项目。
3.arr.concat(arrayX)方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    arrayX  必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
-->


