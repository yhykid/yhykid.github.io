var posts=["2024/10/30/Getting-Started-with-Quadruped-Robots/","2024/11/03/2024-11-7组会分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };