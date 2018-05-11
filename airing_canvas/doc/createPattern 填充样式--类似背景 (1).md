### 填充图片当背景

`fillStyle` 属性接受图片当背景。
这里需要用到 `createPattern(img, repeat-style)` 来设定填充的图片和填充规则。

1. img

可以是：
- 图片对象
- canvas 对象

2. repeat-style 类似于 css 的平铺规则，可选值：

- 平面上重复：repeat
- x 轴上重复：repeat-x
- y 轴上重复：repeat-y
- 不重复：no-repeat

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>createPattern</title>
</head>
<body>
  <canvas id="canvas" style="border: 1px solid #aaa; display: block; margin: 50px auto"></canvas>
  <script>
    window.onload = function() {
      var canvas = document.getElementById('canvas')
      canvas.width = 800
      canvas.height = 600
      var context = canvas.getContext('2d')
      
      var img = new Image()
      img.src = './giraffe.jpg'
      img.onload = function() {
        var pattern = context.createPattern(img, 'repeat')
        context.fillStyle = pattern
        context.fillRect(0, 0, 800, 600)
      }
    }
  </script>
</body>
</html>
```