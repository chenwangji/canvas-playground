### beginPath()

canvas 线条绘制是基于状态的。`stroke()` 和 `fill()` 方法会基于最后一个 `beginPath()` 之后的状态（包括但不限于 fillStyle, strokeStyle, lineWidth, lineCap, globalAlpha）来绘制。

但是图形绘制（`fillRect()`  、 `strokeRect()`）不受影响。

### closePath()

实际上与 `beginPath()` 关系不大，只是起到闭合路径的作用。

### 参考

1. [canvas的beginPath和closePath分析总结，包括多段弧的情况](https://www.cnblogs.com/xuehaoyue/p/6549682.html)
