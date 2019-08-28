<template>
  <f7-page name="消息">
    <f7-toolbar tabbar top>
      <f7-link tab-link="#tab-tx" tab-link-active>提醒</f7-link>
      <f7-link tab-link="#tab-sx">私信</f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="tab-tx" class="page-content" tab-active style="padding:0;margin:0;">
        <f7-block style="padding:0;margin:0;">
          <div class="me-cont">
            <ul>
              <li style="width: 33.3%;">
                <img src="../../assets/ic_topic_gxz_star.png" alt>
                <p>小右通知</p>
              </li>
              <li style="width: 33.3%;">
                <img src="../../assets/ic_my_post.png" alt>
                <p>收到的@</p>
              </li>
              <li style="width: 33.3%;">
                <img src="../../assets/ic_my_pinglun.png" alt>
                <p>新增粉丝</p>
              </li>
            </ul>
          </div>

          <f7-list style="padding:0;margin:0;">
            <f7-list-item link="#" header="Name" title="John Doe" after="Edit">
              <f7-icon slot="media" icon="demo-list-icon">
                <img
                  src="../../assets/img_default_avatar_1.png"
                  alt
                  width="40px"
                  height="40px"
                  class="list-head"
                >
              </f7-icon>
            </f7-list-item>
            <f7-list-item link="#" header="Phone" title="+7 90 111-22-3344" after="Edit">
              <f7-icon slot="media" icon="demo-list-icon">
                <img
                  src="../../assets/img_default_avatar_4.png"
                  alt
                  width="40px"
                  height="40px"
                  class="list-head"
                >
              </f7-icon>
            </f7-list-item>
            <f7-list-item link="#" header="Email" title="john@doe" footer="Home" after="Edit">
              <f7-icon slot="media" icon="demo-list-icon">
                <img
                  src="../../assets/dt_logo2.png"
                  alt
                  width="40px"
                  height="40px"
                  class="list-head"
                >
              </f7-icon>
            </f7-list-item>
            <f7-list-item
              link="#"
              header="Email"
              title="john@framework7"
              footer="Work"
              after="Edit"
            >
              <f7-icon slot="media" icon="demo-list-icon">
                <img
                  src="../../assets/dt_logo5.png"
                  alt
                  width="40px"
                  height="40px"
                  class="list-head"
                >
              </f7-icon>
            </f7-list-item>
          </f7-list>

        </f7-block>
      </f7-tab>
      <f7-tab id="tab-sx" class="page-content" style="padding:0;margin:0;">
        <f7-block style="padding:0;margin:0;">
          <div class="aircraft">
            <a href="#">
              <p class="sx-icon">
                <img src="../../assets/feiji.png" alt>
              </p>
              <span class="feiji-list">纸飞机列表</span>
              <span class="feiji-date">08/20</span>
            </a>
          </div>
          
          <div class="sx-list">
            <f7-link href="/news/privateLetter/">
              <p class="sx-list-icon">
                <img src="../../assets/dt_logo5.png" alt>
              </p>
              <p>
                <span class="feiji-list">纸飞机列表</span>
                <span class="me-answer">我：你好呀，</span>
              </p>
              <span class="feiji-date">08/21</span>
            </f7-link>
          </div>

        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
#tab-sx {
  padding: 0;
  .aircraft {
    overflow: hidden;
    padding: 0.125rem 0.4375rem 0.25rem 0.4375rem;
    box-sizing: border-box;
    border-bottom: 0.125rem solid #ededed;
    .sx-icon img {
      border-radius: 50%;
      width: 1.5625rem;
      height: 1.5625rem;
      text-align: center;
      float: left;
    }
    span {
      margin-top: 0.5625rem;
    }
    .feiji-list {
      color: black;
      float: left;
      display: inline-block;
      margin-left: 0.625rem;
    }
    .feiji-date {
      color: #b5b5b5;
      float: right;
      display: inline-block;
    }
  }
  .sx-list {
    overflow: hidden;
    padding: 0.125rem 0.4375rem 0 0.4375rem;
    box-sizing: border-box;
    .sx-list-icon > img {
      border-radius: 50%;
      width: 1.5625rem;
      height: 1.5625rem;
      float: left;
    }
    span {
      margin-top: 0.25rem;
    }
    .feiji-list {
      width: 6.09rem;
      color: black;
      float: left;
      display: inline-block;
      margin-left: 0.625rem;
    }
    .feiji-date {
      color: #b5b5b5;
      float: right;
      display: inline-block;
    }
    .me-answer {
      width: 50%;
      display: inline-block;
      color: #ccc;
      padding: 0.125rem 0 0 0.52rem;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
}
.list-head {
  border-radius: 50%;
}
</style>
