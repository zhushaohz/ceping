<template>
    <div>
      <p>您的测试结果表</p>
      <div class="model" v-show="isShow">
        <canvas id="canvas" width="1200" height="1200" style="width:300px;height:300px;"></canvas>
      </div>
      <img src="../assets/ad.jpg">
    </div>
</template>

<script>
export default {
  created: function () {
    this.getParams()
  },
  mounted() {
    this.initCanvas()
  },
  name: 'Jieguo',
  data () {
    return {
      msg: '',
      res: '',
      isShow: false
    }
  },
  methods: {
    initCanvas() {
      console.log('初始化canvas')
      this.isShow = true
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.strokeStyle = '#666'
      ctx.arc(600,600,400,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,360,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,320,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,280,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,240,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,200,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,160,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,120,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(600,600,80,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.strokeStyle = '#666'
      ctx.arc(600,600,40,0,2*Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.strokeStyle = '#666'
      ctx.arc(600,600,1,0,2*Math.PI)
      ctx.stroke()
      ctx.font = '60px Arial'
      ctx.fillText('实际型',520,140)
      ctx.font = '60px Arial'
      ctx.fillText('研究型',970,390)
      ctx.font = '60px Arial'
      ctx.fillText('艺术型',970,850)
      ctx.font = '60px Arial'
      ctx.fillText('社会型',520,1100)
      ctx.font = '60px Arial'
      ctx.fillText('企业型',50,850)
      ctx.font = '60px Arial'
      ctx.fillText('传统型',50,390)
      var num = this.msg.split(',')
      console.log(num)
      ctx.strokeStyle = '#dc143c'
      ctx.lineWidth=5;
      ctx.moveTo(600,600-40*num[0])
      ctx.lineTo(600+40*num[1]*Math.sqrt(3)/2,600-40*num[1]/2)
      ctx.stroke()
      ctx.moveTo(600+40*num[1]*Math.sqrt(3)/2,600-40*num[1]/2)
      ctx.lineTo(600+40*num[2]*Math.sqrt(3)/2,600+40*num[2]/2)
      ctx.stroke()
      ctx.moveTo(600+40*num[2]*Math.sqrt(3)/2,600+40*num[2]/2)
      ctx.lineTo(600,600+40*num[3])
      ctx.stroke()
      ctx.moveTo(600,600+40*num[3])
      ctx.lineTo(600-40*num[4]*Math.sqrt(3)/2,600+40*num[4]/2)
      ctx.stroke()
      ctx.moveTo(600-40*num[4]*Math.sqrt(3)/2,600+40*num[4]/2)
      ctx.lineTo(600-40*num[5]*Math.sqrt(3)/2,600-40*num[5]/2)
      ctx.stroke()
      ctx.moveTo(600-40*num[5]*Math.sqrt(3)/2,600-40*num[5]/2)
      ctx.lineTo(600,600-40*num[0])
      ctx.stroke()
    },
    getParams: function () {
      var routerparams = this.$route.query.data
      console.log('结果：' + routerparams)
      this.msg = routerparams
    }
  }
}
</script>

<style scoped>
  p {
    font-size: larger;
  }
  #canvas {
    border: 0px solid rgb(199, 198, 198);
  }
  img {
    width: 100%;
  }
</style>
