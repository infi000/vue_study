/**
 * 数据与方法
 */

//我们的数据对象
var data = { a: 1 };

//该对象加入到vue实例
var vm = new Vue({
    el: "#app",
    data: data
});

vm.a === data.a; //=> true

vm.a = 2;
data.a; //=>2

data.a = 3;
vm.a; //=>3

// 注意：只有当实例被创建时 data 中存在的属性是响应式的。也就是说如果你添加一个新的属性，像：

// vm.b = 'hi'
// 那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：

// data: {
//   newTodoText: '',
//   visitCount: 0,
//   hideCompletedTodos: false,
//   todos: [],
//   error: null
// }


vm.$data === data; //true

vm.$el === document.getElementById("app"); //true

/**
 * [ 实例方法 在vm.a改变后调用]
 * @param  {[type]} newval      [新值]
 * @param  {[type]} oldval [旧值]
 * @return {[type]}             [description]
 */
vm.$watch('a', function(newval, oldval) {
    console.log("oldval======>" + oldval + ";newval=====>" + newval);
});


/**
 * 实例生命周期
 */

//生命周期钩子
//created 在一个实例被创建之后执行

new Vue({
    data:{
        a:1
    },
    created:function(){
        console.log('a is:'+this.a)
    }
})
// => "a is:1"