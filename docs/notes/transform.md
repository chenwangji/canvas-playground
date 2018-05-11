### translate(x, y)

只传入两个参数，其实就是新画布坐标系原点的坐标。

### rotate(deg)

同画圆弧一样，这里传入的参数是弧度。同时需要注意的是，这个旋转是以坐标系的原点 （0， 0）为圆心进行的顺时针旋转。所以在使用 `rotate()` 之前，通常需要配合使用 `translate()` 评议坐标系，确定旋转的圆心。即，旋转变换通常搭配平移变换使用。

### scale(sx, sy)

同样为针对坐标轴的缩放。会产生副作用，慎用。详情参考[Canvas教程(15)——缩放变换](http://airing.coding.me/canvas/14682038619675.html)。

### transform(a, b, c, d, e, f)

矩阵变换。

各参数意义：

参数 | 意义
--- | ---
a | 水平缩放（1）
b | 水平倾斜（0）
c | 垂直倾斜（0）
d | 垂直缩放（1）
e | 水平位移（0）
f | 垂直位移（0）

具体规则参考[Canvas教程(16)——矩阵变换](http://airing.coding.me/canvas/14682038619775.html)

### setTransform(a, b, c, d, e, f)

各参数的意义与 `transform()` 方法一致，不同的 featrue 是，每次调用 `setTransform()` 的时候，它会重置前一个变换矩阵然后构建新的矩阵。

