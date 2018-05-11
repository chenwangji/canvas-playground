### 绘制矩形

```js
ctx.rect()

ctx.fill() // 填充
ctx.stroke() // 秒轮廓
```

### 绘制矩形简写

`rect()` 仅仅只是规划路径而已，而这两个方法确实实实在在的绘制。

`rect()` 和 `fill()` 的简写：
```js
ctx.fillRect(x, y, width, height)
```
`rect()` 和 `stroke()` 的简写：
```js
ctx.strokeRect(x, y, width, height)
```