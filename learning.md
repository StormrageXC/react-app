## 1. font-variant-numeric  

   *控制数字、分数和序号标记的替代字形的使用*   
   font-variant-numeric: normal; 无变化  
   font-variant-numeric: tabular-nums; 表格数字显示，使数字等宽，易于像表格那样对齐  
   font-variant-numeric: proportional-nums 启用比例数字显示。使数字变成基于字形本身形状下的特定宽度表现

## 2. IPC（Inter-Process Communication，进程间通信）‌是计算机系统中不同进程之间交换数据和同步操作的机制。  
### 常见的IPC方法包括： 

- 管道（Pipes）‌：包括匿名管道和命名管道。匿名管道用于具有亲缘关系的进程间通信，如父子进程或兄弟进程；命名管道（FIFO）则可以在不相关的进程之间进行双向通信。 
- 消息队列（Message Queues）‌：允许进程以消息的形式发送和接收数据，常见于Unix和Linux系统中，使用msgget()、msgsnd()、msgrcv()等系统调用。
- 共享内存（Shared Memory）‌：允许多个进程共享同一块内存区域，无需复制数据，提高了效率。使用shmget()、shmat()、shmdt()等系统调用。
- 信号量（Semaphores）‌：用于进程间的同步和互斥，控制对共享资源的访问。使用semget()、semop()、semctl()等系统调用。
- 信号（Signals）‌：用于进程间的异步通信，如终止信号、中断信号等。使用kill()、raise()、sigaction()等系统调用。
- 套接字（Sockets）‌：用于网络通信，允许不同计算机上的进程进行通信。使用socket()、bind()、listen()、accept()等系统调用。
- 文件锁定（File Locking）‌：通过文件系统提供的锁机制，实现进程之间的协调，避免多个进程同时修改同一个文件造成的数据损坏。

[博客链接](https://blog.csdn.net/2301_78622258/article/details/141724779)

## 3. 域名服务器

## 4. 心跳检测机制 

- 在应用层实现心跳机制
- 使用TCP中的keepalive选项
- 使用方式1和2结合使用

[博客链接](https://blog.csdn.net/hellmorning/article/details/139685238)

## 5. 域名拆分‌

域名拆分‌是指将一个复杂的域名拆分成多个部分，以便更好地管理和优化网站或应用的性能。这种拆分可以基于不同的层次，如子域名、路径或参数等‌。域名拆分的主要目的是提高性能、增强安全性、便于管理和优化搜索引擎优化（SEO）‌

### 域名拆分的类型

- 子域名拆分‌：将一个域名拆分成多个子域名，如example.com拆分为blog.example.com、shop.example.com等‌
- 路径拆分‌：在同一域名下，通过不同的URL路径来区分不同的内容，如example.com/blog、example.com/shop‌
- 参数拆分‌：通过URL参数来区分不同的内容，如example.com/article?id=123‌

### 域名拆分的优势

- ‌提高性能‌：通过拆分域名，可以减少单个域名的负载，从而提高网站的加载速度‌
- 安全性增强‌：拆分域名可以降低单点故障的风险，提高系统的整体安全性‌
- ‌便于管理‌：多个域名可以更方便地进行内容更新、维护和备份‌
- ‌SEO优化‌：合理的域名拆分有助于搜索引擎更好地理解和索引网站内容‌

## 6. HTTP2
- 二进制分帧层（Binary Framing Layer）：HTTP2将所有传输的数据都分割成更小的帧，并采用二进制格式进行传输。每个帧都有一个唯一的标识符，使得接收方能够重新组装这些帧，从而实现数据的传输。
- 多路复用（Multiplexing）：HTTP2允许同时发送多个请求和响应，而不需要依赖于顺序。这意味着多个请求可以在同一个TCP连接上并发传输，提高了传输效率。
- 首部压缩（Header Compression）：HTTP2引入了首部压缩机制，通过使用霍夫曼编码等算法，对请求和响应的首部进行压缩，减少了数据传输的大小。
- 服务器推送（Server Push）：HTTP2允许服务器主动向客户端推送资源，而不需要客户端显式地请求。这可以提高页面加载速度，减少不必要的网络请求。
- 流优先级（Stream Prioritization）：HTTP2允许为每个请求和响应设置优先级，服务器可以根据优先级来决定资源的加载顺序。
- 连接管理（Connection Management）：HTTP2引入了连接管理机制，使用多路复用和流优先级等特性，使得连接的管理更加高效。

[博客链接](https://blog.csdn.net/sqlxx/article/details/119056336)
[学习笔记](https://www.bookstack.cn/read/learning-http2/content-frame-definition-settings.md)

## 7.使用URL Scheme和URL Link跳转至小程序
[官网开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-link.html)

## 8. react-devtools启动react开发者工具

## 9. 微数据

## 10. precedence优先级控制

## 11. 分词与词法分析
- ### 分词
分词是将程序源代码分解成一个个词素的过程。词素是程序代码中的最小语义单位，这些词素最终组成一个token列表，每个token包含一个lexeme‌。例如变量名、关键字、运算符、常量等等。分词的目的是将源代码转化为词法单元序列，方便后续的词法分析和语法分析。
在分词的过程中，需要注意以下几点：
#### 忽略空格和注释
在分词的过程中，需要忽略源代码中的空格和注释。因为它们对程序的语义没有影响，而只会增加分析的复杂度。因此，分词器通常会忽略它们。
#### 处理特殊符号
程序源代码中可能包含各种特殊符号，例如括号、逗号、分号等等。这些符号需要被分词器正确地处理，以便后续的分析能够正确地进行。
#### 识别关键字和标识符
在程序中，关键字和标识符是非常重要的部分。关键字是编程语言中预定义的一些特殊单词，例如if、else、while等等。标识符是由程序员定义的用于标识变量、函数、类等等的名称。分词器需要能够正确地识别这些关键字和标识符，并将它们转化为相应的词法单元。
-  ### 词法分析
词法分析是将分词后的词法单元序列转化为有意义的语法单元序列的过程。语法单元是指具有一定语法意义的单元，例如表达式、语句、函数等等。
在词法分析的过程中，需要注意以下几点：
#### 识别词法单元类型
分词后得到的词法单元序列需要被词法分析器进一步处理，将每个词法单元的类型识别出来。例如，变量名、关键字、运算符等等，每种类型的词法单元都需要被正确地识别出来
#### 构建语法单元序列
词法分析器需要根据语言的语法规则，将词法单元序列转化为有意义的语法单元序列。例如，将一些词法单元组合成一个表达式，将一些语法单元组合成一个语句等等。
#### 错误处理
在词法分析的过程中，可能会出现一些词法错误，例如未定义的变量、拼写错误的关键字等等。词法分析器需要能够正确地识别这些错误，并进行相应的处理。

## BigInt
BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数(<span style="color:skyblue">Number.MAX_SAFE_INTEGER</span>), BigInt 可以表示任意大的整数。  
可以用在一个整数字面量后面加 n 的方式定义一个 BigInt。   
不能用于 Math 对象中的方法；不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。 
因为 BigInt 都是有符号的， >>> （无符号右移）不能用于 BigInt。BigInt 不支持单目 (+) 运算符(<span style="color:red">目前来看可以单目操作</span>)  
BigInt 和 Number 不是严格相等的，但是宽松相等的。两者也可以混在一个数组内并排序。
### 静态方法
- #### BigInt.asIntN()
将 BigInt 值转换为一个 -2^(width-1) 与 2^(width-1) - 1 之间的有符号整数。
- #### BigInt.asUintN()
将一个 BigInt 值转换为 0 与 2^(width) - 1 之间的无符号整数。
### 使用建议
#### 转化
由于在 Number 与 BigInt 之间进行转换会损失精度，因而建议仅在值可能大于 2^53 时使用 BigInt 类型，并且不在两种类型之间进行相互转换。

#### 密码学
由于对 BigInt 的操作不是常数时间的，因而 BigInt 不适合用于[密码学](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html)。

#### 在JSON 中使用
对任何 BigInt 值使用 JSON.stringify() 都会引发 TypeError，因为默认情况下 BigInt 值不会在 JSON 中序列化。但是，如果需要，可以实现 toJSON 方法：


        BigInt.prototype.toJSON = function () {
          return this.toString();
        };
        JSON.stringify(BigInt(1));
        // '"1"'


## 12. webpack资源模块

[webpack官网](https://webpack.docschina.org/guides/asset-modules/#root)

## 13. 响应式图片
页面缩放会触发srcset的改变
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Responsive_images)

## 14. 双精度浮点数和单精度浮点数对比

  <table>
    <thead>
      <tr>
        <th>类型</th>
        <th>符号位</th>
        <th>指数位</th>
        <th>阶码位</th>
      </tr>
      <thead>
      <tbody>
        <tr>
          <th>双精度浮点数</th>
          <th>1</th>
          <th>11</th>
          <th>52</th>
        </tr>
        <tr>
          <th>单精度浮点数</th>
          <th>1</th>
          <th>8</th>
          <th>23</th>
        </tr>
      </tbody>
  </table>

## 15. 事件循环

- 任务队列是集合，而不是队列，因为事件循环处理模型从所选队列中获取第一个可运行的任务，而不是出队第一个任务。
- 微任务队列不是任务队列。

### 事件

在特定Event对象上分发EventTarget对象通常由专门的任务完成。

- 并非所有事件都使用任务队列分发；许多事件在其他任务期间分发。

[事件循环event-loop](https://htmlspecs.com/#event-loop)

## 16. crossOrigin 属性设置图片的跨域访问权限。

-  crossOrigin="anonymous"：由 HTMLLinkElement 发送的请求将使用 cors mode 模式和 same-origin credentials 模式。这意味着如果资源是从加载文档的相同源获取的，则将启用 CORS 并发送凭据。
-  crossOrigin="use-credentials"：由 HTMLLinkElement 发送的请求将使用 cors mode 模式和 include credentials 模式。该元素请求的所有资源都将使用 CORS，无论获取来自哪个域。。
-  如果为 crossOrigin 属性指定了任何其他值，则它与指定为 anonymous 的效果相同。如果未指定 crossOrigin 属性，则资源将在没有 CORS 的情况下被获取（即使用 no-cors mode 模式和 same-origin credentials 模式）

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLLinkElement/crossOrigin)

## 17. BFC
-  使用 display: flow-root 和浮动实现双列布局，因为正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)

## 18. 外边距折叠
-  有设定浮动和绝对定位的元素不会发生外边距折叠

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)


## 19. display: grid
-  有设定浮动和绝对定位的元素不会发生外边距折叠

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)

## 20. 在 React 中，渲染应该是纯粹的计算 JSX，不应该包含任何像修改 DOM 这样的副作用 ；React 总是在执行下一轮渲染的 Effect 之前清理上一轮渲染的 Effect

## 21. 触发OPTIONS请求的具体条件
- ‌跨域请求且不是简单请求‌：当发起跨域请求（即请求的目标域名与当前页面域名不同），并且不满足“简单请求”的条件时，浏览器会先发送一个OPTIONS请求作为预检请求，以确认服务器是否允许该跨域操作
- ‌服务器要求预检‌：即使是简单请求，如果服务器在响应中明确要求客户端进行预检，也可能触发OPTIONS请求。这种情况较少见，通常由服务器端的特殊策略决定‌
- 手动发送‌：开发者也可以通过代码手动发送OPTIONS请求‌

## 22.贪婪匹配与惰性匹配
- 贪婪匹配：正则表达式默认是贪婪匹配，即匹配尽可能多的字符。
- 惰性匹配：在量词后面添加?，即可实现惰性匹配，即匹配尽可能少的字符。

## 23. RSA和ECDHE加密算法
- RSA：RSA是一种非对称加密算法，它使用两个不同的密钥：公钥和私钥。公钥用于加密数据，私钥用于解密数据。
- ECDHE：ECDHE是一种基于椭圆曲线的非对称加密算法，它使用两个不同的密钥：公钥和私钥。公钥用于加密数据，私钥用于解密数据。

## 24. token与jwt
[blog](https://blog.csdn.net/weixin_44147535/article/details/135167800)

## 25. xss攻击防御
 - 输入验证：对用户输入的数据进行验证和过滤，防止恶意脚本注入。
 - 输出编码：对动态生成的内容进行编码，防止浏览器将其解释为可执行代码。
 - 内容安全策略（CSP）：通过设置CSP头，限制浏览器加载和执行的资源，防止恶意脚本的注入。
 -  HttpOnly 标志：将 Cookie 标记为 HttpOnly，防止通过 JavaScript 访问 Cookie，从而减少 XSS 攻击的风险。
 -  跨站请求伪造（CSRF）保护：通过使用 CSRF 令牌或 SameSite 属性，防止攻击者在用户不知情的情况下执行恶意请求。

 ## 26. Hook的实现逻辑
