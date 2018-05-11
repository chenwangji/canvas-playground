### 非零环绕原则

复杂路径用 `fill()` 着色，如下图，如何区分内外？

![img](http://7xkcl8.com1.z0.glb.clouddn.com/edu21-1.jpg)

这里就要用到数学上的一个方法——非零环绕原则，来判断哪块区域是里面，哪块区域是外面。接下来，我们具体来看下什么是非零环绕原则。

![img](http://7xkcl8.com1.z0.glb.clouddn.com/edu21-2.jpg)

规则有些负责：

首先，我们得给图形确定一条路径，只要“一笔画”并且“不走重复路线”就可以了。如图，标出的是其中的一种路径方向。我们先假定路径的正方向为1（其实为-1啥的也都可以，正负方向互为相反数，不是0就行），那么反方向就是其相反数-1。

然后，我们在子路径切割的几块区域内的任意一点各取一条方向任意的射线，这里我只取了三个区域的射线为例，来判断这三块区域是“里面”还是“外面”。

接下来，我们就来判断了。S1中引出的射线L1，与S1的子路径的正方向相交，那么我们就给计数器+1，结果为+1，在外面。

S2中引出的射线L2，与两条子路径的正方向相交，计数器+2，结果为+2，在外面。

S3中引出的射线L3，与两条子路径相交，但是其中有一条的反方向，计数器+1-1，结果为0，在里面。没错，只要结果不为0，该射线所在的区域就在外面。

### 例子

根据这个方法，可以绘制一个圆弧


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ring</title>
  <style>
    body {
      background: #000;
    }
    #canvas {
      border: 1px solid #aaa;
      display: block;
      margin: 50px auto;
    }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script>
    window.onload = function() {
      var canvas = document.getElementById('canvas')
      canvas.width = 800
      canvas.height = 600

      var context = canvas.getContext('2d')

      context.fillStyle = '#fff'
      context.fillRect(0, 0, 800, 600)

      context.shadowColor = '#545454'
      context.shadowOffsetX = 5
      context.shadowOffsetY = 5
      context.shadowBlur = 2

      context.arc(400, 300, 200, 0, Math.PI * 2, false)
      context.arc(400, 300, 230, 0, Math.PI * 2, true)
      context.fillStyle = '#0aa'
      context.fill()
    }
  </script>
</body>
</html>
```

