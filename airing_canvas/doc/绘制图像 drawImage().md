### drawImage()

`drawImage()` 可以引入图像，画布，视频，并对其进行缩放或者裁剪。

一共有三种表现形式：

1. 三参数：`context.drawImage(img, x, y)`
2. 五参数： `context.drawImage(img, x, y, width, height)`
3. 九参数： `context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)`

三参数的是标准形式，可用于加载图像、画布或视频；五参数的除了可以加载图像还可以对图像进行指定宽高的缩放；九参数的除了缩放，还可以裁剪。各参数意义见下表。

参数 | 描述
---|---
img | 规定要使用的图像，画布或视频。
sx | 可选。开始剪切的 x 坐标的位置。
sy | 可选。开始剪切的 y 坐标的位置。
swidth | 可选。被剪切图像的宽度。
sheight | 可选。被剪切的图像的高度。
x | 在画布上放置的 x 坐标的位置。
y | 在画布上放置的 y 坐标的位置。
width | 可选。要使用的图像的宽度。（图像会缩放）
height | 可选。要使用的图像的高度。（图像会缩放）