<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <img class="codeimg" src="@/assets/images/cnode.svg" alt="">
          <ul class="navlist">
            <li><a href="">首页</a></li>
            <li><a href="">新手入门</a></li>
            <li><a href="">API</a></li>
            <li><a href="">关于</a></li>
            <li><a href="">注册</a></li>
            <li><a href="">登录</a></li>
          </ul>
        </div>
        </el-col>
     </el-row>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.grid-content {
  height: 50px;
  background: #444444;
  font-size: 14px;
}
.codeimg {
  max-height: 30px;
  max-width: 120px;
  margin-left: 30px;
  margin-top: 10px;
  float: left;
}
.navlist {
  float: right;
  list-style: none;
  display: flex;
  width: 355px;
  height: 40px;
}
.navlist li {
  flex: 1;
  text-align: center;
}
.navlist li a {
  width: 56px;
  display: block;
  text-decoration: none;
  color: #ccc;
}
</style>