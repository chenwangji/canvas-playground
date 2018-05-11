### 阴影

阴影相关有以下4个属性：

- `context.shadowColor`: 阴影颜色。
- `context.shadowOffsetX`: 阴影水平位移。正值向右，负值向左。
- `context.shadowOffsetY`: 阴影垂直位移。正值向下，负值向上。
- `context.shadowBlur`: 阴影模糊半径。

需要注意的是，这里的阴影同其他属性设置一样，都是基于状态的设置。因此，如果只想为某一个对象应用阴影而不是全局阴影，需要在下次绘制前重置阴影的这四个属性。

例如，创建一个向右下方位移各5px的红色阴影，模糊2px，可以这样写。

```js
context.shadowColor = "red"
context.shadowOffsetX = 5
context.shadowOffsetY = 5
context.shadowBlur= 2
```


### 透明度

`context.globalAlpha`
全局透明度属性，默认值为 1.0，取值范围是 0 ~ 1.0。同样是基于状态。

### 图像合成

`context.globalCompositeOperation`

两个图像重合的时候，就涉及到了对这两个图像的合成处理。`globalCompositeOperation` 属性或返回如何将一个源（新的）图像会知道目标（已有）的图像上。

**源图像 = 打算放置到画布上的绘图**

**目标图像 = 已经放置到画布上的绘图**

具体属性值及其含义参考：
1. [Canvas教程(19)——全局阴影与图像合成](http://airing.coding.me/canvas/14682038620119.html)
2. [【HTML5】Canvas之globalCompositeOperation属性详解](https://blog.csdn.net/laijieyao/article/details/41862473)


