
## 1. git commit --amend window下使用insert键插入修改

## 2. gulp运行文件gulpfile.js、

## 3. gulp-imagemin会报错，应直接使用imagemin

## 4. react18兼容react17

-  <p style="color:skyblue; background: rgba(255,0,0,0.5)"> Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot</p>

## 5.rel=preconnect

- \<link\> 元素的 rel 属性的 preconnect 关键字是对浏览器的一种提示，即用户很可能需要来自目标来源的资源，因此浏览器很可能通过抢先启动与该源的连接来改善用户体验
- \<link rel="preconnect"\> 将为未来的跨源 HTTP 请求、导航或子资源带来好处。它对同源请求没有好处，因为连接已经打开。

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect)

## 6.rel="dns-prefetch"

- DNS-prefetch 尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。
- 当浏览器从（第三方）服务器请求资源时，必须先将该跨源域名解析为 IP 地址，然后浏览器才能发出请求。此过程称为 DNS 解析。虽然 DNS 缓存可以帮助减少此延迟，但 DNS 解析可能会给请求增加明显的延迟。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能
- dns-prefetch 仅对跨源域上的 DNS 查找有效

[MDM](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Guides/dns-prefetch)

## 7. loading="lazy"

load 事件在文档被完整的处理完成时触发。当图片使用立即加载（默认值）时，文档中的所有图片都会在 load 事件触发前载入。   
当 loading 值设为 lazy 时，图片不再会在请求，下载，处理的时间内推迟 load 事件触发。  
loading 属性值设为 lazy 但是在页面初次加载时就在可视视口内的图片会立即加载但它们也不会推迟 load 事件。换句话说，这些图片不会在处理 <img> 元素时立即加载，但仍会作为页面初始加载的一部分而加载。他们只是不会影响 load 事件。   
这表明当 load 触发时，可视区域内懒加载的图片可能不可见。 
图片的宽高必须指定，否则会导致图片加载后页面重拍。