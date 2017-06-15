let url = 'article/100/fsy';
let rules = 'article/:articleId/:name';
let reg = new RegExp(/(d+)+(\w+)/gi);

rules.replace(/:(^[\/]+)/g, function () {
    console.log(1);
    console.log(arguments[1]);
});