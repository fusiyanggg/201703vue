/**
 * Created by fusiyang on 2017/6/8.
 */

let vm = new Vue({
    el: "#app",
    data: {
        todo: '',
        hash: '',
        todos: [{isSelected: true, title: '晚上回去睡觉'}]
    },
    methods: {
        add(){
            // alert(this.todo)
            this.todos.push({isSelected: false, title: this.todo});
            this.todo = ''
        },
        del(){

        }
    },
    computed: {
        total(){
            //求出数组中为false的个数
            return this.todos.filter(item => !item.isSelected).length;


        }
    }

});
let listener = () => {
    vm.hash = window.location.hash.slice(1)
};

window.addEventListener('hashchange', listener);
// window.onhashchange = function () {
//     console.log(1);
// }