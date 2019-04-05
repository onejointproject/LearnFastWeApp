<template>
  <div class="_news">
      <header>消息</header>
      <section>
        <ul class="parentlist">
          <li v-for="(item,index) in parentListData" keys="index" @click="jump(index)">
             <div class="parentimg">
                <img src="../../../lib/images/tc84@3x.png"/>
                <span>1</span>
             </div>
             <div class="dialogue">
               <h3>{{item.name}}<span>{{item.newtime}}</span></h3>
               <p>{{item.newmessage[item.newmessage.length-1]}}</p>
             </div>
          </li>
        </ul>
      </section>
      <div class="bottomfot"></div>
  </div>
</template>

<script>
export default {
    data(){
       return{
          parentListData : [
              {
                _iid:280001,
                headimg:"",
                name:"张全蛋的爸爸",
                newmessage:[
                  "张老师好，全蛋学习怎么样"
                ],
                newtime:"14:32"
              },
              {
                _iid:280002,
                headimg:"",
                name:"李狗蛋的妈妈",
                newmessage:[
                  "狗蛋在学校里不捣乱吧"
                ],
                newtime:"14:32"
              }
          ]
       }
    },
    created(){

    },
    methods:{
       jump(index){
           let _iid = this.parentListData[index]._iid
           this.$router.push(`news/chat/${_iid}`)
       }
    },
}
</script>

<style lang='less' scoped>
@import '~lib/style/index.less';
._news {
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column ;
  header{
    width:100%;
    .h(80);
    .l_h(80);
    text-align:center;
    color:#333333;
    font-size:@fontSize-l;
  }
  section{
    box-sizing: border-box;
    flex:1;
    width:100%;
    background:#fff;
    overflow:auto;
    .padding(16px,0,0,0);
    .parentlist{
      li{
        box-sizing: border-box;
        .padding(26px,0,0,20px);
        width:100%;
        .h(160); 
        .parentimg{
          position:relative;
          .margin(0,40px,0,0);
          .w(100);
          .h(100);
          float:left;
          img{
            width:100%;
            height:100%;
          }
          span{
            display:block;
            .w(30);
            .h(30);
            background:#f00;
            color:#fff;
            text-align:center;
            .l_h(30);
            border-radius: 50%;
            position:absolute;
            right:0;
            bottom:0;
          }
        }     
        .dialogue{
          box-sizing: border-box;
          .w(570);
          .padding(10px,20px,0,6px);
          .h(132);
          float:left;
          border-bottom:2px solid #efefef;
          h3{
            font-size:16px;
            .l_h(50);
            span{
              float:right;
            }
          }
          p{
            font-size:15px;
            .l_h(50);
            color:#999999;
          }
        }
      }
    }
  }
  .bottomfot{
    width:100%;
    .h(130);
  }
}
</style>

