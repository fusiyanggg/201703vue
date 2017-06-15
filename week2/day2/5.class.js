function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    console.log(this.name);
};

let p = new Person('lala');
p.getName();
//
Person.add = function () {
    return a + b
};

function People(type, age) { //name 是来自父类的，age是自己的



}
let people = new Person('sdf', 0);