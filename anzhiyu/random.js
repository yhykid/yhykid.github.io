var posts=["2024/10/30/Getting-Started-with-Quadruped-Robots/","2024/12/25/D1机械臂使用说明/","2024/12/25/2024-12-26组会分享/","2024/12/10/写论文相关的帮助/","2024/11/03/2024-11-7组会分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };