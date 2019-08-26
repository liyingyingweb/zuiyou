<template>
  <f7-page
    name="最右"
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-tabs swipeable>
      <f7-tab id="tab-zy" class="page-content" tab-active>
        <!-- 最右页面头部的 tab -->
        <div class="toolbar tabbar tabbar-scrollable toolbar-bottom zy-head">
          <div class="toolbar-inner zy_left">
            <a href="#tab-gz" class="tab-link tab-link-active">关注</a>
            <a href="#tab-tj" class="tab-link">推荐</a>
            <a href="#tab-sp" class="tab-link">视频</a>
            <a href="#tab-tw" class="tab-link">图文</a>
          </div>
        </div>

        <div class="tabs">
          <div id="tab-gz" class="page-content tab tab-active zy-content">
            <f7-list>
              <f7-list-item v-for="(item, index) in items" :key="index">
                <f7-card class="demo-facebook-card">
                  <f7-card-header class="no-border">
                    <div class="demo-facebook-avatar">
                      <a href="http://www.baidu.com" class="external">
                        <img
                          width="40"
                          height="40"
                          src="../../assets/gz_logo1.png"
                          alt
                          class="gz_logo"
                        >
                      </a>
                    </div>
                    <div class="demo-facebook-name username">
                      <a href>
                        <p>小红鹤</p>
                        <p>5小时前</p>
                      </a>
                    </div>
                  </f7-card-header>
                  <f7-card-content>
                    <p>What a nice photo i took yesterday!</p>
                    <img src="../../assets/img_exception_musiclist_empty.png" width="100%">
                    <f7-row tag="p">
                      <f7-col tag="span">
                        <f7-button raised class="mingxing"># 明星 ></f7-button>
                      </f7-col>
                    </f7-row>
                  </f7-card-content>
                  <f7-card-footer class="no-border">
                    <f7-link href="http://www.baidu.com" class="external">
                      <i class="f7-icons add_round_fill but-icon">reply</i>
                      <span class="but-icon">分享</span>
                    </f7-link>
                    <f7-link href="http://www.baidu.com" class="external">
                      <i class="f7-icons add_round_fill but-icon">message</i>
                      <span class="but-icon">评论</span>
                    </f7-link>
                    <f7-link>
                      <i class="f7-icons add_round_fill but-icon">arrow_upward</i>
                    </f7-link>
                    <f7-link>
                      <i class="f7-icons add_round_fill but-icon">arrow_downward</i>
                    </f7-link>
                  </f7-card-footer>
                </f7-card>
              </f7-list-item>
            </f7-list>
          </div>

          <div id="tab-tj" class="page-content tab zy-content">222</div>
          <div id="tab-sp" class="page-content tab zy-content">333</div>
          <div id="tab-tw" class="page-content tab zy-content">444</div>
        </div>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<style lang="scss" scoped>
.zy-head {
  position: fixed;
  top: 0;
  left: 0;
  .zy_left {
    padding-left: 60px;
    box-sizing: border-box;
  }
}

.tabs {
  .zy-content {
    margin-top: 1.375rem;
    box-sizing: border-box;
  }
  .gz_logo {
    border-radius: 50%;
  }
  .username {
    flex: 1;
    p {
      margin: 0.05rem 0 0 0.1rem;
      font-size: 11px;
      color: grey;
    }
  }
}
.but-icon {
  color: #8e8e93;
}
.mingxing {
  width: 80px;
  height: 35px;
  border-radius: 15%;
}
</style>


<script>
import routes from "../../routes";

export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      allowInfinite: true,
      showPreloader: true,
      f7params: {
        // Array with app routes
        routes,
        // App Name
        name: "index",
        // App id
        id: "com.myapp.test",
        theme: "auto"
      }
    };
  },
  methods: {
    loadMore() {
      const self = this;
      if (!self.allowInfinite) return;
      self.allowInfinite = false;

      setTimeout(() => {
        if (self.items.length >= 200) {
          self.showPreloader = false;
          return;
        }

        const itemsLength = self.items.length;

        for (let i = 1; i <= 20; i += 1) {
          self.items.push(itemsLength + i);
        }

        self.allowInfinite = true;
      }, 1000);
    }
  }
};
</script>
