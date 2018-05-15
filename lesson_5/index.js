/**
 * 绑定html class
 */

//#用在组件上
//注册

Vue.component('my-component',{
    template:'<p class="foo bar">hi</p>'
});



// #对象语法

var app=new Vue({
    el:"#app",
    data:{
        isBlue:true,
        classRed:{
            red:true,
        },
        textRed:'red'
    }
});

/**
 * 绑定内链样式
 */

// #对象语法

var app2=new Vue({
    el:"#app2",
    data:{
        style:{
            css1:{
                background:'red',
                color:'#000'
            },
            css2:{
                background:'blue',
                color:"yellow"
            }
        }
    }
});

// #数组语法

