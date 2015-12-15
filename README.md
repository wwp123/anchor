#锚点定位

##兼容性

* ie6+


##样例：

###1、使用步骤
* 引入样式文件

```javascript
<link href="style/christmas.css" rel="stylesheet" type="text/css" />
```
* 在页面头部引用Jquery库：jquery.min.js；
* 以及该锚点插件所需要的js:anchor.js

```javascript
<script src="javascript/jquery.min.js" type="text/javascript"></script>
<script src="javascript/anchor.js" type="text/javascript"></script>
```
 
* 在页面上添加代码

```javascript
<div class="anchor">
    <div class="anchor_wrap" id="index">
      <ul class="anchor_nav">
        <li><a href="javascript:void(0)" anchor-id="1" id="nav1"><i>活动</i><strong>1</strong></a></li>
        <li><a href="javascript:void(0)" anchor-id="2" id="nav2"><i>活动</i><strong>2</strong></a></li>
      </ul>
    </div>
    
    <div class="h15"></div>
    <div class="ac_row" id="main">
      <h2 id="index_1">这是第一个活动页</h2>
      <div class="r1 anchor_mainpage anchor_mainpage1">
      
      </div>
    </div>
    
    <div class="h15"></div>
    <div class="ac_row">
      <h2 id="index_2">这是第二个活动页</h2>
      <div class="r2 anchor_mainpage anchor_mainpage2">
       
      </div>
    </div>
</div>
```
###2、demo
* http://192.168.14.97:8080/acc/wwp/anchor/

##方法
    标题的a标签必须加上id(由nav+数字组成)，与下面<h2>的id(由index+数字)对应。

        

