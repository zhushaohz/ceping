<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="start">
      <router-link to="/ceshi">开始测评</router-link>
    </div>
    <img src="../assets/ad.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '霍兰德职业兴趣测试'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;;
  color: #42b983;
}
a:link {
  text-decoration: none;
}
.start {
  margin: auto;
  width: 150px;
  margin-top: 80px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #42b983;
  border-radius: 8px;
}
img {
  width: 100%;

  margin-top: 140px;
}
</style>
