<template>
    <ul class='navs'>
        <li  v-for='(item,index) in broadcastList'
                                  :key="index">
                                  <img :src='item.img' alt="">
                                  <span> {{item.name}} </span>
                                  </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
             navList: [{
                    name: "通知",
                    img:"@/common/img/nav1.png"
                }, {
                    name: "备课",
                    img:"@/common/img/nav2.png"
                }, {
                    name: "打卡活动",
                    img:"@/common/img/nav3.png" 
                }, {
                    name: "班级相册",
                    img:"@/common/img/nav4.png"
                },{
                    name: "课堂评价",
                    img:"@/common/img/nav5.png"
                }, {
                    name: "教学拓展",
                    img:"@/common/img/nav6.png"
                }, {
                    name: "讨论组",
                    img:"@/common/img/nav7.png"
                }, {
                    name: "调查",
                    img:"@/common/img/nav8.png"
                }],
        }
    }
}
</script>
<style lang="less" scoped>
@import '~lib/style/index.less';
.navs{

}
</style>


