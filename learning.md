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

## 7. 使用URL Scheme和URL Link跳转至小程序
[官网开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-link.html)

## 8. 响应式图片

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Responsive_images)