//=================================================
// 1 .单独导出  导出模块供其他模块使用
let str = 'world';
export let sum = (a = 1, b = 2) => a + b;
export let hs = '我很帅';
export let ug = '我很丑';
// 所有导出的变量，会被默认封装到对象中 => {str:'我很帅',str1:'我很丑'}；
// 导出的是一个对象类型的，不能直接传值，需要以k-v形式存在；
// export ug; ->语法错误 不能直接导出变量。
let _default = sum();
let result = sum(4, 5);
function fn() {
    return 'ahon'
}
let obj = {name: 'jack', age: '18', fav: ['swim', 'game']};
//=================================================
// 2. 直接导出,将变量封装到对象中导出，导入时可通过解构赋值
export {result, str, _default, sum}

//=================================================
// 3. 默认导出:引用时可以使用任意名字
let obj1 = {str, obj, sum, fn};
export default fn;
// export default obj1;

//=================================================