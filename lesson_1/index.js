/**
 * 声明渲染
 * @type {Vue}
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue'
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
});


/**
 * 条件与循环
 */
var app3 = new Vue({
    el: "#app-3",
    data: {

        seen: true,
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [{ text: '学习 JS' },
            { text: '学习 vue' },
            { text: '整个牛项目' }
        ]
    }
});

/**
 * 处理用户输入
 */

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "你好 vue.js",
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        }
    }
});


var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "表单输入内容"
    }
});

/**
 * 组件化应用结构
 */

//组件必须在html文档中必须放在vue实例化过的元素内才能生效
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});


var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});