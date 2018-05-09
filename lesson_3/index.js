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
    }
});