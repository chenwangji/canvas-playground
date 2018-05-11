### isPointInPath(x, y)

所选坐标 (x, y) 是否在当前绘制的路径内。

### 像素操作 API

属性 | 描述
---|---
width | 返回 ImageData 对象的宽度
height | 返回 ImageData 对象的高度
data | 返回一个对象，包含指定的 ImageData 对象的图像数据

方法 | 描述
---|---
createImageData() | 创建新的、空白的 ImageData 对象
getImageData() | 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据
putImageData() | 把图像数据（从指定的 ImageData 对象）放回画布

### toDataUrl([[type, encoderOptions]])

返回包含 data URI 的 DOMString。
参数 | 描述
---|---
type|文件格式，MIME。默认值为 image/png
encoderOptions | 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。

该方法的用途：

1. [js压缩上传图片base64长度](http://www.cnblogs.com/baby123/p/6610606.html)
2. [Canvas绘制、合并、保存图像以及存在的问题](https://www.jianshu.com/p/cb9e5300856b)
3. [用canvas的toDataURL()将图片转为dataURL(base64)](https://blog.csdn.net/oulihong123/article/details/73927514)
