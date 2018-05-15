/**
 * 计算属性
 */

// #基础例子
var app = new Vue({
    el: "#app",
    data: {
        message: "hello"
    },
    computed: {
        //计算属性的getter
        reversedMessage: function() {

            return this.message.split('').reverse().join('');
        }
    },
    // #计算属性VS方法
    methods: {
        fun_reversedMessage: function() {
            return this.message.split('').reverse().join('');

        }
    }
});
//#两者用法上的区别：computed都是根据他依赖的属性进行缓存的，只有依赖的属性改变时，他才会重新求值，methods没有依赖的属性，不会自动执行



// #计算属性VS侦听属性

//主要是注意WATCH属性不要滥用，通常在一些情况下 COMPUTED是更好的选择而不是命令式的使用WATCH
var app2 = new Vue({
    el: '#app-2',
    data: {
        w_firstName: 'Foo',
        w_lastName: 'Bar',
        w_fullName: 'Foo Bar',
        c_firstName: 'Foo',
        c_lastName: 'Bar',

    },
    watch: {
        w_firstName: function(val) {
            this.w_fullName = val + ' ' + this.w_lastName;
        },
        w_lastName: function(val) {
            this.w_fullName = this.w_firstName + ' ' + val;
        }
    },
    computed: {
        c_fullName: function() {
            return this.c_firstName + ' ' + this.c_lastName;
        },

    }
});

//显然computed是更优的选择


// #计算属性的SETTER

var app3=new Vue({
    el:"#app-3",
    data:{
    firstName: 'Foo',
    lastName: 'Bar',
    },
    computed:{
        fullName:{
            get:function(){
                return this.firstName+" "+this.lastName;
            },
            set:function(val){
                //主动设置fullName时触发

                var name =val.split(' ');
                this.firstName=name[0];
                this.lastName=name[name.length-1];
            }
        }
    }
});


//运行app3.fullName='John Doe' setter会被调用，fistname lastName响应的更新


// #侦听器


var app4=new Vue({
    el:"#app-4",
    data:{
        question:"",
        answer:"这里显示答案",
    },
    watch:{
        question:function(val){
            //这里可以一步操作 并且在得到最终结果前设置中间状态，这个事computed无法做到的

            this.answer="watting....";
            var that=this;
            setTimeout(function(){
                that.answer="显示了答案";
            },500);
        }
    }
})
