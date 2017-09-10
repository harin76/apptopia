<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      title: 'Home',
      msg: 'Welcome to Your Vue.js App',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../styles/variables';

  .grid-content {
    height: 150px;
    text-align: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 5px;
  }
  .bg-purple {
    background-color: @light-blue;
  }
  .box {
    background-color: #fff;
    height: 100%;
    margin: 10px;
  }
</style>
