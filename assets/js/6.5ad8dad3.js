(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{52:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"线性渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" 线性渐变")]),s("p",[t._v("填充颜色时，可以将颜色设为渐变，具体步骤：")]),s("ol",[s("li",[t._v("创建渐变线")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" grd "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createLinearGradient")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xstart"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ystart"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xend"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yend"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("为渐变线添加断点")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("grd"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stop"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("这里的stop传递的是 0 ~ 1 的浮点数，代表断点到(xstart,ystart)的距离占整个渐变色长度是比例。")]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("应用渐变")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grd\nctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grd\n")])]),s("h3",{attrs:{id:"径向渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#径向渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" 径向渐变")]),s("p",[t._v("与线性渐变不同的是创建渐变线的方法不同：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" grd "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createRadialGradient")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x0"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y0"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r0"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("至于为什么要设置两个圆，可以参考"),s("a",{attrs:{href:"http://www.cnblogs.com/tianma3798/p/5895811.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("。")])])}],!1,null,null,null);a.default=r.exports}}]);