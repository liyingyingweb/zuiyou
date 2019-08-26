<template>
  <f7-page name="我的">
    <div class="my-logo">
      <f7-link class="setting-icon">
        <img src="../../assets/ic_setting.png" alt>
      </f7-link>
      <f7-link>
        <div class="my-head">
          <img src="../../assets/gender_selector_female.png" alt>
          <span class="me-name">
            是小鱿鱼呀🌿
            <img src="../../assets/ic_userinfo_female.png" class="ic_userinfo" alt>
          </span>
          <div class="me-qianming">
            <span style>🧡💗🧡💗🧡💗</span>
            <i class="f7-icons add_round_fill me-jt-icon">chevron_right</i>
          </div>
          <div class="me-zan">
            <span>8获赞</span>
            <span>1关注</span>
            <span>2粉丝</span>
          </div>
        </div>
      </f7-link>
    </div>
    <div class="me-cont">
      <ul>
        <li>
          <img src="../../assets/ic_topic_gxz_star.png" alt>
          <p>空间动态</p>
        </li>
        <li>
          <img src="../../assets/ic_my_post.png" alt>
          <p>我的贴子</p>
        </li>
        <li>
          <img src="../../assets/ic_my_pinglun.png" alt>
          <p>我的评论</p>
        </li>
        <li>
          <img src="../../assets/ic_my_favor.png" alt>
          <p>我的收藏</p>
        </li>
        <li>
          <img src="../../assets/player_god_icon_like_hl.png" alt>
          <p>我赞过的</p>
        </li>
      </ul>
    </div>

    <f7-list inset style="padding:0;margin:0;">
      <f7-list-item link="#" title="审核专区">
        <img slot="media" src="../../assets/ic_my_shentie.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="游戏中心">
        <img slot="media" src="../../assets/ic_my_group_night.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="最右勋章">
        <img slot="media" src="../../assets/ic_zy_medal.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="最右态度">
        <img slot="media" src="../../assets/ic_my_zy_attitude.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="浏览历史">
        <img slot="media" src="../../assets/ic_my_history.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="我的下载">
        <img slot="media" src="../../assets/ic_my_download.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="最右Family">
        <img slot="media" src="../../assets/ic_my_family.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="小黑屋" style="border-bottom:8px solid #ededed;">
        <img slot="media" src="../../assets/ic_my_shentie.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="青少年模式" style="border-bottom:8px solid #ededed;">
        <img slot="media" src="../../assets/my_young_icon.png" width="44">
      </f7-list-item>
       <f7-list-item link="#" title="夜间模式">
        <img slot="media" src="../../assets/ic_night_mode.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="视频壁纸">
        <img slot="media" src="../../assets/wallpaper_icon.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="帮助与反馈">
        <img slot="media" src="../../assets/ic_my_feedback.png" width="44">
      </f7-list-item>
      <f7-list-item link="#" title="推荐给好友" style="border-bottom:8px solid #ededed;">
        <img slot="media" src="../../assets/ic_my_share.png" width="44">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-logo {
  width: 100%;
  height: 8rem;
  background: url(../../assets/my-logo.png) no-repeat;
  background-image: 100% 100%;
  background-size: 100% 100%;
  overflow: hidden;
  padding: 0.625rem 0.3125rem 0 0.3125rem;
  box-sizing: border-box;
  .setting-icon {
    float: right;
    img {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
  .my-head {
    margin-top: 1.875rem;
    box-sizing: border-box;
    overflow: hidden;
    > img {
      width: 1.5625rem;
      height: 1.5625rem;
      border-radius: 50%;
      border: 0.0625rem solid white;
    }
    .me-name {
      color: white;
      font-size: 14px;
      display: block;
      margin: 0.3125rem 0 0.3125rem 0;
      box-sizing: border-box;
      .ic_userinfo {
        width: 0.625rem;
        height: 0.625rem;
        vertical-align: middle;
        display: inline-block;
      }
    }
    .me-qianming {
      position: relative;
      width: 9.3rem;
      .me-jt-icon {
        color: white;
        display: inline-block;
        font-size: 16px;
        float: right;
        position: absolute;
        top: 0;
        right: 0px;
      }
    }
    .me-zan {
      span {
        font-size: 11px;
        color: white;
        display: inline-block;
        margin: 0.3125rem 0.3125rem 0 0;
      }
    }
  }
}

.me-cont {
  width: 100%;
  overflow: hidden;
  ul {
    overflow: hidden;
    text-align: center;
    padding: 0;
    li {
      width: 20%;
      float: left;
      list-style: none;
    }
  }
  img {
    width: 0.8125rem;
    height: 0.8125rem;
  }
  p {
    display: block;
  }
}
</style>
