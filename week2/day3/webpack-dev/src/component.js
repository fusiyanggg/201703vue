let str = 'world';
export let sum = (a = 1, b = 2) => a + b;

let result = sum(4, 5);
function fn() {
    return 'ahon'
}
let obj = {name: 'jack', age: '18', fav: ['swim', 'game']};
let obj1 = {str, obj, sum, fn, result};
export default obj1;