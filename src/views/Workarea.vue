<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex" class="full-height">
        <Col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto" v-on:on-select="handleMenuSelect">
                <div class="layout-logo-left">APPTOPIA</div>
                <MenuItem name="apps">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">Apps</span>
                </MenuItem>
                <MenuItem name="dashboard">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">Dashboard</span>
                </MenuItem>
                <MenuItem name="reports">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">Reports</span>
                </MenuItem>
                <MenuItem name="views">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">Views</span>
                </MenuItem>
            </Menu>
        </Col>
        <Col :span="spanRight" class="full-height">
            <div class="layout-header">
                <Button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
            </div>
            <router-view></router-view>
            <div class="layout-copy">
              2017 &copy; Canvara Technologies
            </div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'workarea',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    handleMenuSelect (route) {
      console.info(`/workarea/${route}`)
      this.$router.push({path: route})
    },
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
}
</script>
<style>
  .full-height {
    height: 100%;
  }

  .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        height: 100vh;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background-color: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        padding: 5px;
        margin: 15px auto;
        color: #ffffff;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }

</style>
