<template>
  <f7-page
    name="最右"
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-toolbar tabbar top>
      <f7-link tab-link="#tab-guanzhu" tab-link-active>关注</f7-link>
      <f7-link tab-link="#tab-tuijian">推荐</f7-link>
      <f7-link tab-link="#tab-shipin">视频</f7-link>
      <f7-link tab-link="#tab-tuwen">图文</f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="tab-guanzhu" class="page-content" tab-active>
        <f7-block class="right-inner">
          <f7-list class="right-inner">
            <f7-list-item v-for="(item, index) in items" :key="index">
              <f7-card class="demo-facebook-card">
                <f7-card-header class="no-border">
                  <div class="demo-facebook-avatar">
                    <a href="#" class="external">
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
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">reply</i>
                    <span class="btn-wenzi">分享</span>
                  </f7-link>
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">message</i>
                    <span class="btn-wenzi">评论</span>
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_up_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_down_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                </f7-card-footer>
              </f7-card>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-tuijian" class="page-content">
        <f7-block class="right-inner">
          <f7-list class="right-inner">
            <f7-list-item v-for="(item, index) in items" :key="index">
              <f7-card class="demo-facebook-card">
                <f7-card-header class="no-border">
                  <div class="demo-facebook-avatar">
                    <a href="#" class="external">
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
                  <img src="../../assets/img_cover_guest.png" width="100%">
                  <f7-row tag="p">
                    <f7-col tag="span">
                      <f7-button raised class="mingxing"># 明星 ></f7-button>
                    </f7-col>
                  </f7-row>
                </f7-card-content>
                <f7-card-footer class="no-border">
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">reply</i>
                    <span class="btn-wenzi">分享</span>
                  </f7-link>
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">message</i>
                    <span class="btn-wenzi">评论</span>
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_up_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_down_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                </f7-card-footer>
              </f7-card>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-shipin" class="page-content">
        <f7-block class="right-inner">
          <f7-list class="right-inner">
            <f7-list-item v-for="(item, index) in items" :key="index">
              <f7-card class="demo-facebook-card">
                <f7-card-header class="no-border">
                  <div class="demo-facebook-avatar">
                    <a href="#" class="external">
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
                  <img src="../../assets/img_default_avatar_5.png" width="100%">
                  <f7-row tag="p">
                    <f7-col tag="span">
                      <f7-button raised class="mingxing"># 明星 ></f7-button>
                    </f7-col>
                  </f7-row>
                </f7-card-content>
                <f7-card-footer class="no-border">
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">reply</i>
                    <span class="btn-wenzi">分享</span>
                  </f7-link>
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">message</i>
                    <span class="btn-wenzi">评论</span>
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_up_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_down_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                </f7-card-footer>
              </f7-card>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-tuwen" class="page-content">
        <f7-block class="right-inner">
          <f7-list class="right-inner">
            <f7-list-item v-for="(item, index) in items" :key="index">
              <f7-card class="demo-facebook-card">
                <f7-card-header class="no-border">
                  <div class="demo-facebook-avatar">
                    <a href="#" class="external">
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
                  <img src="../../assets/welcome_anim_header_pullrefresh_frame5.png" width="100%">
                  <f7-row tag="p">
                    <f7-col tag="span">
                      <f7-button raised class="mingxing"># 明星 ></f7-button>
                    </f7-col>
                  </f7-row>
                </f7-card-content>
                <f7-card-footer class="no-border">
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">reply</i>
                    <span class="btn-wenzi">分享</span>
                  </f7-link>
                  <f7-link href="#" class="external">
                    <i class="f7-icons add_round_fill but-icon">message</i>
                    <span class="btn-wenzi">评论</span>
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_up_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                  <f7-link>
                    <img
                      src="../../assets/ic_comment_down_in_topicrec.png"
                      alt
                      width="22px"
                      height="22px"
                    >
                  </f7-link>
                </f7-card-footer>
              </f7-card>
            </f7-list-item>
          </f7-list>
        </f7-block>
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
    box-sizing: border-box;
    padding: 0 2rem;
  }
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

.but-icon {
  color: #8e8e93;
  font-size: 0.625rem;
}
.btn-wenzi {
  color: #8e8e93;
  font-size: 0.375rem;
}
.mingxing {
  width: 80px;
  height: 35px;
  border-radius: 15%;
}
.page-content {
  padding: 0;
  .right-inner {
    padding: 0;
    margin: 0;
  }
}
</style>


<script>
import routes from "../../routes";

export default {
  data() {
    return {
      items: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
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
