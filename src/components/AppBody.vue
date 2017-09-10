<template>
  <div class="flex-column">
    <row type="flex">
      <col span="12">
        <div class="layout-breadcrumb">
          <slot name="crumbs"></slot>
        </div>
        <div span="12" class="actions">
          <slot name="actions"></slot>
        </div>
      </col>
    </row>
    <div class="layout-content">
      <div class="layout-content-main">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-body'
}
</script>

<style scoped>
  .flex-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  .actions {
    padding: 10px 15px 0;
    text-align: right;
    align-content: right; 
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    display: flex;
    flex-direction: column;
    margin: 15px;
    overflow: hidden;
    background-color: #ffffff;
    flex: 1;
    overflow-y: auto;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout copy {
    min-height: 50px;
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
