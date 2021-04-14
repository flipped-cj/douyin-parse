## 一个用Node写的抖音无水印解析项目

代码很简单可自行修改

[![c6aH6U.png](https://z3.ax1x.com/2021/04/14/c6aH6U.png)](https://imgtu.com/i/c6aH6U)

[![c6aLm4.png](https://z3.ax1x.com/2021/04/14/c6aLm4.png)](https://imgtu.com/i/c6aLm4)

 `npm i` && `npm run dev`

开发模式3000端口，开发模式下解析出的链接只能右键打开，单击或者右键打开链接 请求头会有"referer": "http://localhost:3000"，导致403被禁止访问，
上线后不会出现这个问题。

上线前需更改 `/public/js/app.4cf2cbb0.js` 中的请求接口，`ctrl+f` 将 http://localhost:3000 更换为自己的域名

可访问：<https://douyin.flechazo.site/> 体验
