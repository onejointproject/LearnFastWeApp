<template>
  <ul class="_nav">
    <router-link tag="li" to="/home"><p><i class="iconfont">&#xe87e;</i>首页</p></router-link>
    <router-link tag="li" to="/news"><p><i class="iconfont">&#xe69b;</i>消息</p></router-link>
    <router-link tag="li" to="/myself"><p><i class="iconfont">&#xe6b8;</i>我的</p></router-link>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style lang='less' scoped>
@import '~lib/style/index.less';
._nav {
  position:absolute;
  .left(0);.bottom(0);
  width:100%;
  .h(100);
  display:flex;
  background:#fafbfc;
  justify-content: space-between;
  li{
    .h(100);
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    p{
      .iconfont{
        font-size:20px;
        text-align:center;
         display:block;
      }
    }
  }
}
</style>
