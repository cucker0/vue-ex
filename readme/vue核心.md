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
[helloWorld.html](../HelloWorld/helloWorld.html)


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

### html属性绑定变量
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


### 使用JavaScript表达式
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

## 指令


