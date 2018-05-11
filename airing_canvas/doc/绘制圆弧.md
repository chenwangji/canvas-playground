### 标准圆弧

`arc(x, y, radius, startAngle, endAngle, anticlockwise)`

- x,y 圆心坐标
- radius 圆半径
- startAngle 起始圆弧值
- endAngle 终止圆弧值

弧度的规定是绝对的，如图：

![img](http://7xkcl8.com1.z0.glb.clouddn.com/edu9-2.png-normal.jpg)

- anticlockwise 是顺时针还是逆时针绘制，默认 true 为逆时针， false 为顺时针，默认为 false

### 切点绘圆弧

`arcTo(x1, y1, x2, y2, r)`

这个函数以给定的半径绘制一条弧线，圆弧的起点与当前路径的位置到 (x1, y1) 点的直线相切，圆弧的终点与 (x1, y1) 点到 (x2, y2) 的直线相切。因此其通常配合 moveTo() 或 lineTo() 使用。其能力是可以被更为简单的  arc() 替代的，其复杂就复杂在绘制方法上使用了切点。

下图的标注能更好地帮助我们理解参数直接是如何圆弧的显示规则
![arcTo](http://7xkcl8.com1.z0.glb.clouddn.com/edu10-2.jpeg-normal.jpg)

这里注意一下，`arcTo()` 绘制的起点是 (x0, y0)，但 (x0, y0) 不一定是圆弧的切点。真正的 `arcTo()` 函数只传入 (x1, y1) 和 (x2, y2)。其中 (x1, y1) 称为控制点，(x2, y2) 是圆弧终点的切点，它不一定在圆弧上。但 (x0, y0) 一定在圆弧上。具体参考[这里](http://airing.coding.me/canvas/14682038619190.html)

### 二次贝塞尔曲线

贝塞尔曲线是由起始点、N-1个控制点和终止点控制的曲线，二次贝塞尔曲线就只有一个控制点。

绘制二次贝塞尔曲线的方法是 

`quadraticCurveTo(cpx, cpy, x, y)`

该方法通常配合 `moveTo(x, y)` 和 `lineTo(x, y)` 使用。

- cpx, cpy 控制点的坐标
- x, y 结束点的坐标

贝塞尔曲线[在线转化器](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)。

### 三次贝塞尔曲线

与二次类似，只是多了个控制点，所以方法传参会增加：

`bizierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`

同样有交互网页 [Canvas Bézier Curve Example](http://tinyurl.com/html5bezier)