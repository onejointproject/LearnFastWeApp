<template>
    <div class='home'>
        <div class='header'>
            <div class='hearder-search'>
                <span>
                    <i class='iconfont'>&#xe715;</i>
                    北京市
                    </span>
                <div>
                   <input type="text">
                   <i class='iconfont'>&#xe605;</i> 
                </div>
            </div>  
        </div>
        <div class='box'> 
            <!-- banner图 -->
              <div class='banner'>
                    <mt-swipe >
                            <mt-swipe-item  v-for='(item,index) in bannerList'
                                    :key="index"
                            >
                                <img :src ='item.image'  alt="">
                            </mt-swipe-item>
                    </mt-swipe>
                    
               </div>
             <!-- 广播 -->
              <div class="broadcast">
                 <div class='broadcast-ioc'>
                      <!-- <img src="@/common/img/w1.jpg" alt=""> -->
                      图片
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
            <!-- 作业 -->
              <div class='work'>
                     <ul>
                         <li>
                             <!-- <img src="@/common/img/work.png" alt=""> -->
                             <p>布置作业</p>
                        </li>
                         <li>
                            <!-- <img src="@/common/img/work1.png" alt=""> -->
                             <p>发布作业</p> 
                        </li>
                     </ul>
             </div>
        </div>
    </div>
     
</template>

<script>
import BScroll from 'better-scroll';
import  ApiConfig from '@/api/apiconfig.js'
export default {
    data(){
        return{
        bannerList:[],
          broadcastList:['你为什么还没过上你想要的生活','女博士相亲角被嘲？其实是有“预谋”的行为艺术','莲花粉橙色也太美了！连直男都爱的仙女色！']  
          }
    },
    methods: {
         bannerdata(){
            let url=ApiConfig.bannerApi
            this.$axios.get(url)
            .then((data)=>{
             this.bannerList=data.data.result
          //   console.log(this.bannerList)
              })
         },
    },
    created(){
         this.bannerdata()
    }
}
</script>
<style lang="less" scoped>
@import '~lib/style/index.less';
.home{
    width:100%;
    position:fixed;
    .top(0);
    .bottom(0); 
    background: #f1f4f8;
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
    .box{
        width:100%;
        position: absolute;
        .top(100);
       .banner{
                width: 100%;
                .h(400);
         .mint-swipe{
             width: 100%;
              .padding(0,18,0,18);
              .h(400);
        .mint-swipe-items-wrap{
            .mint-swipe-item{
                .w(715);
                 border-radius:5px;
                 overflow: hidden;
               img{
                    .w(716);
                    .h(400);
                      border-radius:5px;
                        }
                 }
               
             }
            
         }
        }
         .broadcast{
             .w(675);
             .h(80);
             margin: 0 auto;
             background: #fff;
             display: flex;
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
    .work{
             .w(675);
             margin: 20px auto;
            //  background: #308bfe;
             overflow: hidden;
               ul{
                   .w(700);
                  display: flex;
                   li{
                       .w(350);
                       .h(163);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    margin-right: 15px;
                    border-radius:10px;
                    img{
                        .w(120);
                        .h(120);
                        margin-right:10px;
                    }
                    p{
                      font-weight: 600;
                      font-size:14px;
                    }
                   }
               }
           }
}
</style>