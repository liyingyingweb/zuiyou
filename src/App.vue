<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>

    <f7-views tabs>
      <f7-toolbar tabbar bottom class="zuiyou-footer">
        <f7-link tab-link="#tab-zy" tab-link-active>
          <img
            width="26"
            height="26"
            src="../../zuiyou/src/assets/vip_ic_bot_tab_home.png"
            alt
            @click="viewRight"
            v-show="isShow"
          >
          <img
            width="32"
            height="32"
            src="../../zuiyou/src/assets/vip_ic_bot_tab_home_selected.png"
            alt
            @click="viewRight"
            v-show="!isShow"
            style="display: none;"
          >
          最右
        </f7-link>
        <f7-link tab-link="#tab-dt">
          <img
            width="26"
            height="26"
            src="../../zuiyou/src/assets/vip_ic_bot_tab_discovery.png"
            alt
          >
          动态
        </f7-link>
        <f7-link tab-link="#tab-fb">
          <img width="40" height="40" src="../../zuiyou/src/assets/vip_ic_bot_tab_publish.png" alt>
        </f7-link>
        <f7-link tab-link="#tab-xx">
          <img width="26" height="26" src="../../zuiyou/src/assets/vip_ic_bot_tab_msg.png" alt>
          消息
        </f7-link>
        <f7-link tab-link="#tab-wd">
          <img width="26" height="26" src="../../zuiyou/src/assets/vip_ic_bot_tab_me.png" alt>
          我的
        </f7-link>
      </f7-toolbar>

      <!-- Main view-->
      <f7-view tab tab-active id="tab-zy" url="/"></f7-view>
      <f7-view tab id="tab-dt" url="/dynamic/"></f7-view>
      <f7-view tab id="tab-fb" url="/release/"></f7-view>
      <f7-view tab id="tab-xx" url="/news/"></f7-view>
      <f7-view tab id="tab-wd" url="/my/"></f7-view>
    </f7-views>
  </f7-app>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.zuiyou-footer {
  font-size: 11px;
}
</style>
<script>
import routes from "./routes";

export default {
  data() {
    return {
      isShow: true,
      f7params: {
        // Array with app routes
        routes,
        // App Name
        name: "My 最右",
        // App id
        id: "com.myapp.test",
        theme: "auto"
        // ...
      }
    };
  },
  methods: {
    viewRight() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

