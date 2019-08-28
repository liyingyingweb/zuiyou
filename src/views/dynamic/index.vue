<template>
  <f7-page
    name="动态"
    ptr
    @ptr:refresh="loadMore1"
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <div class="dt-navbar">
      <f7-link
        href="#"
        class="external"
        style="display:block;overflow:hidden;
    "
      >
        <img
          src="../../assets/ic_dt_navbar_zfjlogo.png"
          alt
          class="aircraft"
          width="82"
          height="22"
        >
        <img src="../../assets/ic_dt_navbar_zpy.png" alt class="find-friend" width="61" height="28">
      </f7-link>
    </div>

    <div class="tabs">
      <div class="page-content tab tab-active">
        <f7-card class="demo-facebook-card dt_card">
          <div class="demo-facebook-avatar" style="float:left;">
            <a href="#" class="external">
              <img width="40" height="40" src="../../assets/gz_logo1.png" alt class="dt_logo">
            </a>
          </div>

          <div class="demo-facebook-name username">
            <a href>
              <p style="color:black;font-size:14px;">右友_383040ce</p>
              <p style="color: #8E8E8E;">
                今日访客
                <span style="color:#1C86EE">+100</span>
              </p>
            </a>
          </div>

          <div class="dongtai" style="float:right;">
            <span>发动态</span>
            <img
              width="32"
              height="32"
              src="../../assets/night_button_camera_small.png"
              alt
              style="vertical-align: middle;"
            >
          </div>

          <div class="dt_qiehuan">
            <f7-link class="gz_link" tab-link="#tab-gz" tab-link-active>关注</f7-link>
            <f7-link class="gz_link" tab-link="#tab-gc">广场</f7-link>
          </div>

          <!-- <f7-list media-list>
          <f7-list-item v-for="(item, index) in items" :key="index">-->
          <f7-tabs swipeable>
            <f7-tab id="tab-gz" class="page-content" tab-active>
              <f7-block style="text-align:center;">
                <img src="../../assets/dt_logo1.png" alt>
                <p>是我不够帅？竟然没人发动态！</p>
              </f7-block>
            </f7-tab>

            <f7-tab id="tab-gc" class="page-content dt-content">
              <f7-list style="padding:0;">
                <f7-list-item v-for="(item, index) in items" :key="index" style="padding:0;">
                  <div class="dt_userinfo">
                    <div class="dt_userinfo_inner">
                      <a href="#" class="external">
                        <img
                          width="40"
                          height="40"
                          src="../../assets/gz_logo3.png"
                          alt
                          class="dt_logo1"
                        >
                        <span style="color:#666666">小汤元糯米团子💕 ~</span>
                      </a>

                      <!-- 点击箭头下拉 -->
                      <f7-button
                        actions-open="#actions-two-groups"
                        style="display:inline-block;float:right;"
                      >
                        <i class="f7-icons add_round_fill jt-icon">chevron_down</i>
                      </f7-button>

                      <f7-actions id="actions-two-groups">
                        <f7-actions-group>
                          <f7-actions-button class="jt-button1">不喜欢这条动态</f7-actions-button>
                          <f7-actions-button class="jt-button2">不喜欢这个人</f7-actions-button>
                          <f7-actions-button class="jt-button3">举报</f7-actions-button>
                          <f7-actions-button class="jt-button4">取消</f7-actions-button>
                        </f7-actions-group>
                      </f7-actions>

                      <!-- 点击关注 -->
                      <f7-button outline round class="guanzhu1" @click="guanzhuBtn">{{message}}</f7-button>
                      <f7-button outline round class="guanzhu2" v-if="isShow"></f7-button>

                      <div class="userinfo_inner">
                        <p>今天也是元气满满的一天呐！🎈 🌈</p>
                        <img
                          width="200"
                          height="200"
                          src="../../assets/dt_logo2.png"
                          alt
                          style="border-radius:5px;"
                        >
                        <div class="dianzan">
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_comment.png"
                            alt
                            class="user-icon1"
                          >
                          <span>31</span>
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="isSeen"
                          >
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like_select.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="!isSeen"
                            style="display:none;"
                          >
                          <span>20</span>
                        </div>
                        <div class="comment">
                          <p>
                            你最爱最爱的人
                            <span>: 别跟我抢</span>
                          </p>
                          <p>
                            陈公子
                            <span>: 好可爱的蜡笔小新！</span>
                          </p>
                          <img
                            width="12"
                            height="12"
                            src="../../assets/ic_dt_pinglunyixia.png"
                            alt
                            class="user-icon3"
                          >
                          <span class="pl">评论一下...</span>
                        </div>
                      </div>
                    </div>

                    <div class="dt_userinfo_inner">
                      <a href="#" class="external">
                        <img
                          width="40"
                          height="40"
                          src="../../assets/gz_logo4.png"
                          alt
                          class="dt_logo1"
                        >
                        <span style="color:#666666">是小鱿鱼呀🌞 ~</span>
                      </a>

                      <!-- 点击箭头下拉 -->
                      <f7-button
                        actions-open="#actions-two-groups"
                        style="display:inline-block;float:right;"
                      >
                        <i class="f7-icons add_round_fill jt-icon">chevron_down</i>
                      </f7-button>

                      <f7-actions id="actions-two-groups">
                        <f7-actions-group>
                          <f7-actions-button class="jt-button1">不喜欢这条动态</f7-actions-button>
                          <f7-actions-button class="jt-button2">不喜欢这个人</f7-actions-button>
                          <f7-actions-button class="jt-button3">举报</f7-actions-button>
                          <f7-actions-button class="jt-button4">取消</f7-actions-button>
                        </f7-actions-group>
                      </f7-actions>

                      <!-- 点击关注 -->
                      <f7-button outline round class="guanzhu1" @click="guanzhuBtn">{{message}}</f7-button>
                      <f7-button outline round class="guanzhu2" v-if="isShow"></f7-button>

                      <div class="userinfo_inner">
                        <p>
                          粉红色的天
                          <br>粉红色的你 🍥💗
                        </p>
                        <img
                          width="200"
                          height="200"
                          src="../../assets/dt_logo3.png"
                          alt
                          style="border-radius:5px;"
                        >
                        <div class="dianzan">
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_comment.png"
                            alt
                            class="user-icon1"
                          >
                          <span>31</span>
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="isSeen"
                          >
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like_select.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="!isSeen"
                            style="display:none;"
                          >
                          <span>20</span>
                        </div>
                        <div class="comment">
                          <p>
                            你最爱最爱的人
                            <span>: 别跟我抢</span>
                          </p>
                          <p>
                            陈公子
                            <span>: 好可爱的蜡笔小新！</span>
                          </p>
                          <img
                            width="12"
                            height="12"
                            src="../../assets/ic_dt_pinglunyixia.png"
                            alt
                            class="user-icon3"
                          >
                          <span class="pl">评论一下...</span>
                        </div>
                      </div>
                    </div>

                    <div class="dt_userinfo_inner">
                      <a href="#" class="external">
                        <img
                          width="40"
                          height="40"
                          src="../../assets/gz_logo5.png"
                          alt
                          class="dt_logo1"
                        >
                        <span style="color:#666666">黑糖丸丸🌛 ~</span>
                      </a>

                      <!-- 点击箭头下拉 -->
                      <f7-button
                        actions-open="#actions-two-groups"
                        style="display:inline-block;float:right;"
                      >
                        <i class="f7-icons add_round_fill jt-icon">chevron_down</i>
                      </f7-button>

                      <f7-actions id="actions-two-groups">
                        <f7-actions-group>
                          <f7-actions-button class="jt-button1">不喜欢这条动态</f7-actions-button>
                          <f7-actions-button class="jt-button2">不喜欢这个人</f7-actions-button>
                          <f7-actions-button class="jt-button3">举报</f7-actions-button>
                          <f7-actions-button class="jt-button4">取消</f7-actions-button>
                        </f7-actions-group>
                      </f7-actions>

                      <!-- 点击关注 -->
                      <f7-button outline round class="guanzhu1" @click="guanzhuBtn">{{message}}</f7-button>
                      <f7-button outline round class="guanzhu2" v-if="isShow"></f7-button>

                      <div class="userinfo_inner">
                        <p>喜欢夜晚 🍦</p>
                        <img
                          width="200"
                          height="200"
                          src="../../assets/dt_logo4.png"
                          alt
                          style="border-radius:5px;"
                        >
                        <div class="dianzan">
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_comment.png"
                            alt
                            class="user-icon1"
                          >
                          <span>31</span>
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="isSeen"
                          >
                          <img
                            width="22"
                            height="22"
                            src="../../assets/img_friend_emotion_like_select.png"
                            class="user-icon2"
                            alt
                            @click="sort"
                            v-show="!isSeen"
                            style="display:none;"
                          >
                          <span>20</span>
                        </div>
                        <div class="comment">
                          <p>
                            你最爱最爱的人
                            <span>: 别跟我抢</span>
                          </p>
                          <p>
                            陈公子
                            <span>: 好可爱的蜡笔小新！</span>
                          </p>
                          <img
                            width="12"
                            height="12"
                            src="../../assets/ic_dt_pinglunyixia.png"
                            alt
                            class="user-icon3"
                          >
                          <span class="pl">评论一下...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </f7-list-item>
              </f7-list>
            </f7-tab>
          </f7-tabs>
          <!-- </f7-list-item>
          </f7-list>-->
        </f7-card>
      </div>
    </div>
  </f7-page>
</template>

<style lang="scss">
// 黄色的背景部分
.dt-navbar {
  width: 100%;
  height: 1.75rem;
  background: #ffeb30;
  img {
    margin: 0.5rem 0.3125rem;
    box-sizing: border-box;
  }
  .aircraft {
    float: left;
  }
  .find-friend {
    float: right;
  }
}
// main
.tabs {
  .dt_card {
    overflow: hidden;
    box-shadow: none;
    .username {
      float: left;
      margin-left: 0.1875rem;
      box-sizing: border-box;
    }
    .dt_qiehuan {
      clear: both;
      border-bottom: 1px solid #ccc;
      margin-bottom: 0.3125rem;
      box-sizing: border-box;
      .gz_link {
        margin: 0.3125rem 0.625rem 0.3125rem 0;
        box-sizing: border-box;
        color: #8e8e8e;
      }
    }
    .dt_logo {
      border: 1px solid #63b8ff;
      padding: 0.05rem;
      border-radius: 50%;
      margin-top: 0.3125rem;
      box-sizing: border-box;
    }
    .dongtai {
      margin-top: 0.5rem;
      box-sizing: border-box;
      span {
        color: #1c86ee;
        font-size: 13px;
      }
      .but-icon {
        color: #1c86ee;
        margin-left: 0.2rem;
        vertical-align: middle;
        box-sizing: border-box;
      }
    }
    .dt-content {
      padding: 0;
      .dt_userinfo:nth-child(1) {
        padding-top: 0;
      }
      .list {
        .item-content {
          padding: 0;
          .item-inner {
            padding: 0;
            display: inline;
            a {
            }
          }
        }
      }
      .dt_userinfo {
        overflow: hidden;
        .dt_userinfo_inner {
          overflow: hidden;
          padding: 0.3125rem 0 0.3125rem 0;
          box-sizing: border-box;
          border-bottom: 5px solid #ededed;
          span{
            font-size: .375rem;
          }
          .guanzhu1 {
            width: 1.8125rem;
            height: 0.875rem;
            line-height: 0.875rem;
            display: inline-block;
            float: right;
            display: inline;
          }
          .guanzhu2 {
            width: 1.8125rem;
            height: 0.875rem;
            line-height: 0.875rem;
            display: inline-block;
            float: right;
            color: #ccc;
            display: none;
          }
          .dt_logo1 {
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 0.3125rem;
            box-sizing: border-box;
          }
          .jt-icon {
            color: #ccc;
            font-size: 0.625rem;
          }
          .userinfo_inner {
            padding-left: 1.375rem;
            box-sizing: border-box;
            > p {
              font-size: .3125rem;
            }
            .dianzan {
              margin-top: 0.3125rem;
              box-sizing: border-box;
              span {
                font-size: 12px;
              }
              .user-icon1,
              .user-icon2 {
                vertical-align: middle;
                margin-right: 0.1875rem;
                box-sizing: border-box;
              }
              .user-icon2 {
                margin-left: 0.9375rem;
              }
            }
            .comment {
              font-size: 11px;
              border-left: 0.01875rem solid #ccc;
              padding-left: 0.1875rem;
              span {
                color: #4d4d4d;
                font-size: .3125rem;
              }
              .user-icon3 {
                color: #4d4d4d;
                vertical-align: middle;
                margin-right: 0.1875rem;
              }
              .pl {
                font-size: 10px;
                color: #999999;
                display: inline-block;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }
}
.jt-button1 {
  border-bottom: 1px solid #ccc;
  text-align: center;
  margin: 0 auto;
}
.jt-button2 {
  border-bottom: 1px solid #ccc;
}
.jt-button3 {
  border-bottom: 7px solid #f4f4f4;
}
</style>


<script>
import routes from "../../routes";

export default {
  data() {
    return {
      itemlist: [
        {
          title: "Yellow Submarine"
        },
        {
          title: "Don't Stop Me Now"
        },
        {
          title: "Billie Jean"
        }
      ],
      isShow: true,
      isSeen: true,
      message: "关注",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      allowInfinite: true,
      showPreloader: true,
      actionGridOpened: false,
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
    openActionsPopover() {
      const self = this;
      const app = self.$f7;
      if (!self.actionsToPopover) {
        self.actionsToPopover = app.actions.create({
          buttons: [
            {
              text: "不喜欢这条动态"
            },
            {
              text: "不喜欢这个人"
            },
            {
              text: "举报"
            },
            {
              text: "取消"
            }
          ],
          // Need to specify popover target
          targetEl: self.$el.querySelector(".button-to-popover")
        });
      }

      // Open
      self.actionsToPopover.open();
    },
    guanzhuBtn() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.message = "关注";
      } else {
        this.message = "已关注";
      }
    },
    sort() {
      this.isSeen = !this.isSeen;
    },
    //下拉加载
    loadMore() {
      const self = this;
      if (!self.allowInfinite) return;
      self.allowInfinite = false;

      setTimeout(() => {
        if (self.items.length >= 100) {
          self.showPreloader = false;
          return;
        }

        const itemsLength = self.items.length;

        for (let i = 1; i <= 20; i += 1) {
          self.items.push(itemsLength + i);
        }

        self.allowInfinite = true;
      }, 1000);
    },
    //上拉刷新
    loadMore1(event, done) {
      const self = this;

      setTimeout(() => {
        const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${Math.round(
          Math.random() * 10
        )}.jpg`;

        // self.itemlist.push({
        //   title: song,
        //   author,
        //   img: picURL
        // });

        done();
      }, 1000);
    }
  }
};
</script>
