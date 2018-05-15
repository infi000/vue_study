//
//#用 v-for把一个数组对应为一组元素
//
//# 一个对象的v-for
var app = new Vue({
    el: "#app",
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})


//建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
//
//

/**
 * 数组更新检测
 */


/**
 * 注意事项
 */

 // 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

// 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
// 当你修改数组的长度时，例如：vm.items.length = newLength
// 
/**
 * 为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：

// Vue.set
Vue.set(example1.items, indexOfItem, newValue)
// Array.prototype.splice
example1.items.splice(indexOfItem, 1, newValue)
为了解决第二类问题，你可以使用 splice：

example1.items.splice(newLength)
 */