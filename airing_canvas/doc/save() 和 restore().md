canvas 的状态就是当前画面应用的所有样式和变形的一个快照。另外，用来操作这个状态的有两个方法：`save()` 和 `restore()`。`save()` 用来保存当前状态，`restore()` 用来恢复刚才保存的状态。他们都可以多次调用。

```js
ctx.fillStyle = 'black';
ctx.fillRect(20, 20, 150, 150);
ctx.save();  //保存当前状态
ctx.fillStyle= '#fff';
ctx.fillRect(45, 45, 100, 100);
ctx.restore();    //恢复到刚才保存的状态
ctx.fillRect(70, 70, 50, 50);
```