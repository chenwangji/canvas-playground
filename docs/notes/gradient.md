### 线性渐变

填充颜色时，可以将颜色设为渐变，具体步骤：
1. 创建渐变线

``` js
var grd = ctx.createLinearGradient(xstart, ystart, xend, yend)
```
2. 为渐变线添加断点

``` js
grd.addColorStop(stop, color)
```
这里的stop传递的是 0 ~ 1 的浮点数，代表断点到(xstart,ystart)的距离占整个渐变色长度是比例。

3. 应用渐变

```js
ctx.fillStyle = grd
ctx.strokeStyle = grd
```

### 径向渐变

与线性渐变不同的是创建渐变线的方法不同：

```js
var grd = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
```
至于为什么要设置两个圆，可以参考[这里](http://www.cnblogs.com/tianma3798/p/5895811.html)。