<template>
  <div class="me-container">
    <el-container>
      <el-main>
        <div class="pictShow"> 
            <!-- 可通过fit确定图片如何适应到容器框 -->
           <el-image
   
      :src="avater"
    ></el-image>
        </div>
        <div class="wordShow">
          <p>男，单身，在校大学生，</p>
          <p>好吃但不懒做，没钱也没颜，</p>
          <p>不喜欢唱跳但喜欢打篮球.</p>
        </div>
      </el-main>
      <el-footer>
        <el-row :gutter="gutter">
          <el-col :span="4">
            <img src="..\assets\icon_QQ.png" alt="">
          </el-col>
          <el-col :span="8">
            <p>2050333453</p>
          </el-col>
             <el-col :span="4">
            <img src="..\assets\github-fill.png" alt="">
          </el-col>
          <el-col :span="8">
            <p>Yjedo</p>
          </el-col>
         
        </el-row>
        <el-row :gutter="gutter">
           <el-col :span="4">
            <img src="..\assets\电话.png" alt="">
          </el-col>
          <el-col :span="8">
            <p>112233</p>
          </el-col>
          <el-col :span="4">
            <img src="..\assets\wechat.png" alt="">
          </el-col>
          <el-col :span="8">
              <p>yyd97851</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
export default {
    name: 'MeShow',
    data(){
        return{
          gutter: 5,
          avater:'https://img2.baidu.com/it/u=1451684198,866874194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625',
            // qq: "..\assets\qq轻聊.png",
            // phone: "..\assets\电话.png",
            // githup: "..\assets\github-fill.png",
            // wechat: "..\assets\微信.png",
        }
    }
}
</script>

<style scoped>
  .me-container{
    background: #b8ddf7;
    width: 90%;
    height: 600px;
    margin: auto;
    margin-top: 20px;
     /* opacity: 90%; */
  }

  .me-container .el-image{
    width: 200px; 
    height: 200px;
    border-radius: 100%;
  }
  .me-container .wordShow{
    width: 350px;
    height: 150px;
    border-bottom: solid 2px gray;
    margin: auto;
    margin-top: 20px;
  }

  .me-container .wordShow p{
     color: slategrey;
     font-size: 18px;
  }

  .me-container img{
    width: 50px;
    height: 50px;
    margin: 15px auto;
  }
  .me-container .el-col p{
    text-align: left;
    color: grey;
    font-size: 20px;
    line-height: 80px;
  }
</style>