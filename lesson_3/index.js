/**
 * 模板语法
 */

/**
 * 插值
 */



var app = new Vue({
    el: "#app",
    data: {
        //#文本
        //
        //数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
        msg: "这是msg",
        //#原始HTML
        //
        //双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
        rawHtml: "<b>这是HTML代码</b>",
        //#特性
        //如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中。
        attrId:"pull-right",
        isButtonDisabled:false,
        //#使用 JavaScript 表达式
        //这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
        number:2,
        ok:false,
        message:'this is the last time',
        id:1
    }
});

/**
 * 指令
 */

//#参数
//一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 属性

//#修饰符
//修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：

/**
 * 缩写
 */


//v-on @  v-bind :