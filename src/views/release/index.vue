<template>
  <f7-page name="发布">
    <div class="fabu-head">
      <f7-link href="#">
        <i class="f7-icons add_round_fill fb-icon">chevron_left</i>
      </f7-link>
      <f7-link class="fabu" popup-close>发布</f7-link>
      <textarea class="fb-txt" cols="30" rows="8" placeholder="我的快乐源泉"></textarea>
    </div>
    <div class="fb-huati">
      <a href>
        <img src="../../assets/fb-info.png" alt>
        <span>选择话题</span>
        <span class="fb-more">选择合适的话题会有更多赞哦~ &nbsp; ></span>
      </a>
    </div>
    <div class="fb-footer">
      <f7-toolbar style="background-color: white;">
        <f7-link href="#" class="external">
          <i class="f7-icons add_round_fill footer-icon">camera</i>
        </f7-link>
        <f7-link href="#" class="external">
          <i class="f7-icons add_round_fill footer-icon">videocam_fill</i>
        </f7-link>
        <f7-link href="#" class="external">
          <i class="f7-icons add_round_fill footer-icon">mic_fill</i>
        </f7-link>
        <f7-link href="#" class="external">
          <i class="f7-icons add_round_fill footer-icon">link</i>
        </f7-link>
        <f7-link href="#" class="external">
          <i class="f7-icons add_round_fill footer-icon">bars_chart</i>
        </f7-link>
      </f7-toolbar>
    </div>
  </f7-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.fabu-head {
  width: 100%;
  padding: 0.1875rem;
  box-sizing: border-box;
  .fb-icon {
    float: left;
    color: #a8a8a8;
    font-size: 20px;
  }
  .fabu {
    float: right;
    font-size: 14px;
    color: #1c86ee;
  }
  .fb-txt {
    padding: 0.75rem 0 0 0.1875rem;
    font-size: 13px;
  }
}
.fb-huati {
  width: 90%;
  margin: 0 auto;
  padding: 0.1875rem 0.4375rem;
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  img {
    float: left;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    padding-top: 0.1875rem;
  }
  span:nth-child(1) {
    color: black;
    float: left;
  }
  .fb-more {
    color: #a8a8a8;
    float: right;
  }
}
.fb-footer {
  width: 100%;
  position: relative;
  bottom: -6rem;
  left: 0;
  border-top: 0.00625rem solid #ccc;
  background-color: white;
  .footer-icon {
    color: #1c86ee;
  }
}
</style>
