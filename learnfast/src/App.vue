<template>
  <div id="app">
    <router-view />
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
      console.log(this)
  },
}
</script>

<style lang='less' scoped>
@import '~lib/style/index.less';
#app {
  width:100%;
  height:100%;
  background:#f1f4f8;
   overflow: hidden;
}
</style>
