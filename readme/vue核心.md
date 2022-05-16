# vue核心

## vue是什么
The Progressive JavaScript Framework（渐近式JavaScript框架）

先只用vue核心组件，需要功能再加进哪个组件(路由组件、状态管理组件)

doc文档
* https://vuejs.org/
* https://cn.vuejs.org/
* https://github.com/vuejs/vue

作者：尤雨溪(Evan You)，曾就职于 Google Creative Labs 和 Meteor Development Group。

作用：动态构建用户界面。

### vue特点
* 遵循MVVM模式
* 编码简洁，体积小，运行效度高，适合移动/PC端开发
* 它本身只关注UI，可以轻松引入vue插件或其它第三方库开发项目

与其它前端JS框架的关联
* 借鉴了angular的模板和数据绑定技术。
* 借鉴了react的组件化和虚拟DOM技术。


### vue插件
* vue-cli  
    vue脚手架
* vue-resource(axios)  
    ajax请求
* vue-router  
    路由
* vuex  
    状态管理
* vue-lazyload  
    图片懒加载
* vue-scroller  
    页面滑动相关
* mint-ui  
    基于vue的UI组件库(移动端)
* element-ui  
    基于vue的UI组件库(PC端)
* ant-design-vue  
    基于vue的UI组件库(PC端)



## vue的基本使用

### vue Hello World
[helloWorld.html](../vue_basic/helloWorld.html)


[![Hello World](../image/helloWord.png)](../static/video/vue_helloWorld.wmv "Vue Hello World")


* Vue的调试工具  
    Vue Devtools

* 理解MVVM
    * M  
        model，模型，数据对象(data)
    * V  
        view，视图，模板页面
    * VM  
        view model，视图模型(一个Vue的实例对象)

    ![](../image/mvvm示例.png)
    ![](../image/MVVM.png)


## 模板语法

### 插值
#### 插入文本
插入的是普通文本

* 语法
    ```html
    {{变量}}
    ```
    Mustache标签
    
* 示例
    ```html
    <html>
    <head>
        <script src="../static/js/vue.js"></script>
    </head>
    
    <body>
    <div id="app">
        <span>Message: {{msg}}</span>
    </div>
    
    <script type="text/javascript">
        const vm = new Vue({
            el: '#app',
            data: { 
                msg: 'Hello Vue!'
            }
        })
    </script>
    
    </body>
    </html>
    ```
    当 msg 数据改变时，html上值也会更行.

* 一次性插入值

    通过使用 `v-once` 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定
    ```html
    <span v-once>这个将不会改变: {{ msg }}</span>
    ```

#### 插入原始html
插入原始html，显示真正的html。

使用`v-html` 指令。 

[示例rawHtml.html](../templateSyntax/rawHtml.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../static/js/vue.js"></script>
</head>
<body>
<div id="app">
    <p>Using mustaches普通文本: {{rawHtml}}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>

<script>
    const vm = new Vue({
        el: '#app',
        data: {
            rawHtml: '<span style="color: red">This should be red</span>'
        }
    })
</script>

</body>
</html>
```

效果：
![](../image/rawHtml.png)

#### html属性绑定变量
使用`v-bind`指令

* 语法
    ```html
    v-bind:属性名="变量名"
    ```

[示例](../templateSyntax/attribute.html)
```html
<div v-bind:id="dynamicId"></div>
```

```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```
当变量`isButtonDisabled`不为 null、undefined 或 false，则等效于 `disabled="disabled"`


#### 使用JavaScript表达式
[示例](../templateSyntax/javascriptExpression.html)

```html
    <!-- 算术运算 -->
    <p>{{ number + 1 }}</p>

    <!-- 三元表达式 -->
    <p>
        <span>3 > 4 ?</span>
        {{ 3 > 4 ? 'YES' : 'NO' }}
    </p>

    <!-- 调用方法 -->
    <div>{{ msg.split('').reverse().join('') }}</div>

    <!-- 字符串连接 -->
    <p v-bind:id="'no_' + dynamicId">字符串连接</p>
```

### 指令
指令是带有 `v-` 前缀的特殊 html属性。
如 v-bind:、v-on:、v-model、v-once、v-show、v-pre、v-html、v-text、v-if、v-else、v-else-if、

指令的职责是：当表达式的值改变时，将产生的连带影响，响应式地作用于DOM。`v-for`指令除外。

```html
<p v-if="seen">现在你看到我了</p>
```
这里的`v-if`指令将根据表达式`seen`的值的true/false 来插入/移除`<p>`元素

#### 指令参数(静态)
一些指令能够接受一个"参数"

##### 指令将响应式地更新指定的属性
* 语法
    >指令:属性

* 示例
    ```html
    <a v-bind:href="url">点我呀</a>
    ```
    这里的参数是属性名
    
##### 监听DOM事件
* 语法
    >指令:事件名

* 示例
    ```html
    <div v-on:click="func1">提交</div>
    ```
    这里的参数是事件名
    
#### 指令动态参数
v2.6.0新增

使用"[参数]"的JavaScript表达式来表示动态指令参数。

* 动态参数为属性
    ```html
    <a v-bind:[attribute_name]="url"> ... </a>
    ```
    这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。
    
    例如，如果你的 Vue 实例有一个 data property attributeName，其值为 "href"，`v-bind:[attribute_name]`将等价于 `v-bind:href`。

* 动态参数为事件名
    ```html
    <a v-on:[event_name]="doSomething"> ... </a>
    ```
    在这个示例中，当 eventName 的值为 "focus" 时，`v-on:[event_name]` 将等价于 `v-on:focus`。

##### 对动态参数的值的约束
动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。

任何其它非字符串类型的值都将会触发一个警告。

##### 对动态参数表达式的约束
动态参数表达式有一些语法约束，因为某些字符，如`空格`和`引号`，放在 HTML attribute 名里是无效的。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写。

* 示例
    ```html
    <!-- 这会触发一个编译警告 -->
    <a v-bind:['foo' + bar]="value"> ... </a>
    ```
    变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。


    ```html
    <!--
    在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
    除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
    -->
    <a v-bind:[someAttr]="value"> ... </a>
    ```

#### 事件修饰符
修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

* 示例
    `.prevent` 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
    ```html
    <form v-on:submit.prevent="onSubmit">...</form>
    ```
#### 常用指令的缩写
##### `v-bind:`缩写为`:`
```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```

##### `v-on:`缩写为`@`
```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

##### 注意事项
[参考](https://v3.cn.vuejs.org/guide/template-syntax.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

* 对动态参数值约定

    动态参数预期会求出一个字符串，null 例外。  
这个特殊的 null 值可以用于显式地移除绑定。  
任何其它非字符串类型的值都将会触发一个警告。

* 对动态参数表达式约定

    动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。
    
    ```html
    <!-- 这会触发一个编译警告 -->
    <a v-bind:['foo' + bar]="value"> ... </a>
    ```

* Java 表达式

## Data Property 和 methods
组件`data()`选项是一个函数，该函数返回一个对象。  
Vue 会在创建组件实例的过程中调用`data()`函数，以`$data` 形式存储在组件实例中。

* 实例
    ```js
    const app = Vue.createApp({
      data() {
        return { count: 4 }
      }
    })
    
    const vm = app.mount('#app')
    
    console.log(vm.$data.count) // => 4
    console.log(vm.count)       // => 4
    
    // 修改 vm.count 的值也会更新 $data.count
    vm.count = 5
    console.log(vm.$data.count) // => 5
    
    // 反之亦然
    vm.$data.count = 6
    console.log(vm.count) // => 6
    ```



## 计算属性、侦听器
* 回调函数的特定
    * 用户定的函数
    * 用户自己没有调用
    * 在一定条件下触发调用了

### computed 计算属性
计算属性是下面这部分
```js
const vm = new Vue({
        computed: {
            // ...    
        }
    })
```

* 什么触发时候执行  
    DOM初始化显示时、或 相关的属性发生改变时。
* 计算属性的值为  
    方法的返回值。
* 可以为计算属性设置 getter、setter方法，实现数据的双向绑定（显示数据和侦听到数据改变时更新）
* 计算属性存在缓存，多次读取只执行一次getter方法。
* 使用 `{{计算属性名}}` 或 `{{计算函数名}}` 来显示计算属性的值

#### computed计算属性缓存 vs 方法
[示例](../vue_basic/computed_vs_methed.html)

访问时 console 控制输出的信息
![](../image/computed属性缓存vs方法.png)

#### 计算属性 vs 侦听器
当你有一些数据需要随着其它数据变动而变动时，`watch` 很容易被滥用。

* watch 版本

html代码
```html
<div id="demo">{{ fullName }}</div>
```

js代码
```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}).mount('#demo')
```

缺点：上面代码是命令式且重复的。

* 计算属性的版本
```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}).mount('#demo')
```
这样简洁很多。

### watch 侦听器
侦听器是下面这分部
```js
const vm = new Vue({
        watch: {
            // firstName 为侦听的对象，即当前vm对象的.data.firstName 对象
            // 当函数值传一个值时，为newVal(侦听对象发生改变后的值)
            // function (newVal) {}
            /**
             *
             * @param newVal: 改变后的值
             * @param olVal: 改变前的值
             */
            firstName: function (newVal, olVal) {
                this.fullName2 = newVal + ' ' + this.lastName;
            }
        }
    })
```
* 什么时候触发侦听器执行  
    当侦听的对象发生变化时执行。
 
[vue计算属性与侦听器 演示](../static/video/vue计算属性与侦听器.wmv)


## class 与 style 绑定
操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，

所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。

因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。

### class绑定
格式：
```html
:class="xxx"
```
`:class` 是 `v-bind:class` 的简写

xxx 是字符串或字符串变量  
xxx 是对象  
xxx 是数组

* 是字符串或字符串变量
    
    ```html
    <p class="staticClass" :class="myclass">xxx是字符串 或 字符串变量</p>
    ```
    ```js
        const vm = new Vue({
            el: "#app",
            data: {
                myclass: "aClass",
                isA: true,
                isC: false,
                errorClass: "alert",  // 值为上面的 .error css样式
                activeClass: "active"  // 值为上面的 .active css样式
            },
            methods: {
                changecolor() {
                    this.myclass = this.myclass === "aClass" ? "bClass" : "aClass"
                },
                objectbind() {
                    this.isC = true
                }
            }
        });
    ```
    
    渲染的结果为
    ```html
    <p class="staticClass aClass">xxx是字符串 或 字符串变量</p>
    ```
    ![](../image/class绑定1.png)
    
    点击一次 `更改颜色` 按钮后的渲染结果为
    ```html
    <p class="staticClass bClass">xxx是字符串 或 字符串变量</p>
    ```
    ![](../image/class绑定2.png)
    

* 对象语法(对象key为css class中，值为true则添加该class，否则不添加)
    html
    ```html
    <p :class="{aClass: isA, cClass: isC}">xxx是对象</p>
    ```
    
    js
    ```js
        const vm = new Vue({
            el: "#app",
            data: {
                myclass: "aClass",
                isA: true,
                isC: false,
                errorClass: "alert",  // 值为上面的 .error css样式
                activeClass: "active"  // 值为上面的 .active css样式
            },
            methods: {
                changecolor() {
                    this.myclass = this.myclass === "aClass" ? "bClass" : "aClass"
                },
                objectbind() {
                    this.isC = true
                }
            }
        });
    ```
    渲染结果：
    ```html
    <p class="aClass">xxx是对象</p>
    ```
    
    * 绑定的class为一个计算属性(返回的对象)
    
        [class绑定计算属性返回的对象](../vue_basic/class_bind_object.html)
        
        渲染结果为：
        ```html
        <p class="staticClass active">xxx是对象(计算属性返回的对象，常用且强大的模式)</p>
        ```
        
* 数组语法

    数组元素为 css 样式名
    ```html
    <p :class="[activeClass, errorClass]">xxx是数组</p>
    ```
    
    渲染的结果为
    ```html
    <p class="active alert">xxx是数组</p>
    ```
    ![](../image/class绑定3.png)

### style绑定
`:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。

* 对象语法
    示例格式：
    ```html
    <div :style="{color: activeColor, fontSize: fontsize + 'px'}">style绑定内联样式</div>
    ```
    
    [class_style_bind](../vue_basic/class_style_bind.html)
    
    html
    ```html
    <div :style="{color: activeColor, fontSize: fontsize + 'px'}">style绑定内联样式</div>
    ```
    
    js
    ```js
        const vm = new Vue({
            el: "#app",
            data: {
                fontsize: 30,
                activeColor: "blue"
            }
        });
    ```
    
    渲染结果
    ```html
    <div style="color: blue; font-size: 30px;">style绑定内联样式</div>
    ```

    * style 直接绑定到一个样式对象
        
        [style_bind_object](../vue_basic/style_bind_object.html)
        
        html
    
        ```html
        <p :style="styleObject">style 绑定(计算属性返回的一个对象)</p>
        ```
        js
        ```js
            const vm = new Vue({
                el: "#app",
                data: {
                    isActive: true,
                    error: null
                },
                computed: {
                    styleObject() {
                        return {
                            color: 'red',
                            fontSize: '18px'
                        }
                    }
                }
            });
        ```
        渲染结果：
        ```html
        <p style="color: red; font-size: 18px;">style 绑定(计算属性返回的一个对象)</p>
        ```
    
* 数组语法

