/**
 * Created by fusiyang on 2017/6/7.
 */
// 新建的项目需要做两件事
// 1》 配置npm 环境 否则require 会报虚线
// 2》 配置es6语法支持

//数组的5个重要方法 find foreach reduce filter some

let arr = [{name: 'fsy'}, {name: 'hellow'}, {name: 'word'}, {name: 'fsy'}, {name: 'zfpx'}];

let username = 'fsy';

arr.forEach(function (item, index) {
    console.log(this); //->this 回调函数默认的this是window
    if (item.name === 'zfpx') {
        return //不会return  所以foreach没有return
    }

}, arr); //改变了this指向 ※如果是箭头函数作为回调函数是不会改变this指向的

//通过find代替foreach

//2. find: 遍历数组，并查找符合条件的元素，需要传入回调函数
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// [].find(function(item,OP_index,OP_currentArray){},OP_thisArg)
// 返回找到的那一项
let result = arr.find(function (item, index) {
    //如果在这个函数中return 为 true 则终止运行并会将这一项返回
    // return true  //会将第一项返回 ()
    // return false //没找到返回undefine
    // return 条件成立 返回本次执行遍历到的item
    return 'hello' === item.name
}, arr); //改变了this指向
//简易的判断是否包含这一项

console.log([1, 2, 3, 4, 5, 6, 11].indexOf(11) > -1);
console.log([1, 2, 3, 4, 5, 6, 11].includes(11));
//3. some :与find类似，
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// [5,6,11]  返回的是boolean 类型 ，
let newArr = [5, 6, 7];
let flag = arr.some(function (item, index) {
    // return username === etiem.name;
    return item > 11;
});
console.log(flag); //声明式 不用关心他是怎么实现的，直接用就行了，
//==>vue 也是声明式
//3.map 映射 映射可以将一个数组变成另一种方式显示 //返回一个新的数组
let arrlidse = [{name: 'szdf', age: 8}, {name: 'js', age: 18}]; //吧数组变成一个列表
arrlidse.map(function (item, index) {
    return //->[undefined,undefined]  可用来做数组修改
});
`<ul>
<li>zfpx 8</li>
<li>jw 18</li>
</ul>`;


//3 .forEach 没有return
//4.filter 过滤 如果函数中返回true 则将这一项放到新数组中，false则不执行操作
let filterArr = [{name: 'szdf', age: 8}, {name: 'js', age: 18}].filter(function (item, index) {
    // return true //filter = 原数组
    // return item.name ==='sdf'; //返回新数组
    return item.name !== 'js'; //新数组中不存在js项  变相删除
});
//5. reduce 缩减 可以返回叠加后的结果，

console.log([1, 2, 3, 4, 5].reduce(function (prev, next, index, arr) {
    console.log(arguments);
    return prev + next; //->求和
}));

//6. forEach |for in for of
//不能return  | 可以遍历数组
