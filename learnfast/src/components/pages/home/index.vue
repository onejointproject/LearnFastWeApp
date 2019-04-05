<template>
  <div class='home'>
    <div class="header">
          <div class='hearder-search'>
                <span>
                    <i class='iconfont'>&#xe715;</i>
                    北京市
                    </span>
                <div>
                   <input type="text">
                   <i class='iconfont'>&#xe6ac;</i> 
                </div>
            </div>  
    </div>
     <div class='wrap'>
       <div class="content">
         <!-- banner图 -->
           <div class='banner'>
                <mt-swipe :auto="4000">
                        <mt-swipe-item  v-for='(item,index) in bannerList'
                                  :key="index"
                        >
                            <img :src ='item.image'  alt="">
                        </mt-swipe-item>
                </mt-swipe>        
           </div>
           <div class="broadcast">
                 <div class='broadcast-ioc'>
                      <img src="@/common/img/w1.jpg" alt="">
                 </div>
                 <div class='min-banner' >
                    <mt-swipe :show-indicators="false">
                        <mt-swipe-item  v-for='(item,index) in broadcastList'
                                  :key="index"
                        >
                           <a href="#">{{item}}</a>
                        </mt-swipe-item>
                </mt-swipe>        
                 </div>
                
           </div>
          <!-- 导航栏 -->


     </div>
     </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import  ApiConfig from 'common/api/apiconfig.js'
export default {
     data () {
       return {
           bannerList:[],
           broadcastList:['你为什么还没过上你想要的生活','女博士相亲角被嘲？其实是有“预谋”的行为艺术','莲花粉橙色也太美了！连直男都爱的仙女色！']

       }
     },
     methods: {
        bannerdata(){
            let url=ApiConfig.bannerApi
            this.$axios.get(url)
            .then((data)=>{
              // console.log(data)
             this.bannerList=data.data.result
             console.log(this.bannerList)
              })
         },
     },
     created () {
        this.bannerdata()
     }
}
</script>
<style lang="less" scoped>
@import '~lib/style/index.less';
.home{
     width:100%;
   position: relative;
    .header {
          position: relative;
          width: 100%;
         .h(300);
          background-image: linear-gradient(0deg, #2ab8c9,#2da9db);
           .hearder-search{
            .h(80);
            .padding(0,18,0,27);
            display:flex;
            justify-content: space-between;
            align-items: center;
             color:#fff;
            span{
                font-size: @fontSize-m;
            }
            div{
                  position: relative;
                input{
                    .w(525);
                    .h(50);
                    border-radius:20px;
                    border:0;
                    outline: none;
                    text-indent:1em;
                   background: #71c1eb;
                }
                .iconfont{
                    position: absolute;
                    .top(5);
                    .right(15);
                    font-weight:600;
                    color: #308bfe;
                }
            }

        }
        }
    .header:after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -100px;
          content: ' ';
          .h(300);
          width: 100%; 
          border-radius: 0 0 50% 50%;
          background-image: linear-gradient(0deg, #2ab9c8,#2db2ce);
        }
    .wrap{
        position: absolute;
        .top(100);
        .right(18);
         .content{
            .w(715);
            .h(3000);
            margin: 0 auto;
          .banner{
              width:100%;
               .h(410);
               border-radius:10px;
               overflow: hidden;  
            img{
                  width: 100%;
                  height:100%;
                }
            }
          .broadcast{
             .w(675);
             .h(80);
             margin: 0 auto;
             background: #fff;
             display: flex;
               overflow: hidden;  
             align-items: center;
             .broadcast-ioc{
                  .margin(0,12,0,35);
                  img{
                    .w(38);
                    .h(38);
                  }
             }
             .min-banner{
                   .w(540);
                   .h(80);
                   .l_h(80);
                      a{
                         display: inline-block;
                        .w(540);
                          .h(80);
                        color:#545252;
                        font-size:12px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                      }
                   }
          }
         }
      }





}
</style>

