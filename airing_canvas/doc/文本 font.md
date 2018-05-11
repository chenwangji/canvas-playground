## 属性

### font

```js
context.font = '[font-style] [font-variant] [font-weight] [font-size/line-height] [font-family]'
```
5 个参数均可缺省（问：但是缺省了，怎么对应起来？）

1. font-style 定义字体的风格。

值 | 描述
---|---
normal | 默认值。标准样式。
italic | 倾斜样式
oblique | 倾斜样式

2. font-variant 设置小型大写字母的字体显示文本

值 | 描述
---|---
normal | 默认值。标准显示。
small-caps | 显示小型大写字母

3. font-weight 文本是否加粗

属性与 css 文本加粗属性一致。
4. line-height 设置行高
5. font-family 指定字体

通常设置文字 `font` 属性只设置 `font-size` 和 `font-family` 两个值。

```js
context.font = '50px serif'
```

### textAlign

水平对齐。

```js
context.textAlign = 'start | end | left | center | right'
```
值所对应意义如下：

值 | 意义
---|---
start | 默认。文本从指定的位置开始。
end | 文本从指定的位置结束。
left | 文本左对齐。
center | 文本中心对齐。
right | 文本右对齐。

### textBaseline

垂直对齐。
```js
context.textAlgn = 'alphabetic | top | hanging | middle | ideographic | bottom'
```
各值及意义：

值 | 意义
---|---
alphabetic | 默认。文本基线是普通的字母基线。
top | 文本基线是 em 方框的顶端。
hanging | 文本基线是悬挂基线。
middle | 文本基线是 em 方框的正中。
ideographic | 文本基线是表意基线。
bottom | 文本基线是 em 方框的底端。

各基线的位置：

![基线](http://7xkcl8.com1.z0.glb.clouddn.com/edu18-2.gif)

## 方法

### fillText(String, x, y, [maxlen])

在画布上绘制“被填充的”文本。

参数的意义：
参数 | 意义
---|---
String | 要绘制的文字
x | 横坐标
y | 纵坐标
maxlen | 显示的最大宽度，超出会压缩文字

### strokeText(String, x, y, [maxlen])

在画布上绘制文本（无填充）。
参数意义与 `fillText()` 一样。

### measureText()

返回包含指定文本宽度的对象。

Canvas 只支持单行显示。
用这个 api 可以实现换行显示（TODO: 具体怎么实现呢？）。

返回文本宽度：

```js
context.measureText(text).width
```

