<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail" @touch.stop.prevent>
    <div class="detail-wrapper clear-fix">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
            <support-ico :type="item.type" :size="2"></support-ico>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">
            {{seller.bulletin}}
          </p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="hide">
      <i class="icon-close"></i>
    </div>
  </div>
  </transition>
</template>
<script>
import SupportIco from 'components/support-ico/support-ico'
import Star from 'components/star/star'
export default {
  name: 'header-detail',
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  },
  components: {
    SupportIco,
    Star
  }
}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  @import '~common/stylus/variable'

  .header-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(10px)
    opacity: 1
    color: $color-white
    background: $color-background-s
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    .detail-wrapper
      display: inline-block
      min-height: 100%
      width: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        .name
          font-size: $fontsize-large
          font-weight: 700
          line-height: 16px
          text-align: center
        .star-wrapper
          margin-top: 18px
          padding: 2px 0
          text-align: center
        .title
          display: flex
          margin: 28px auto 24px
          width: 80%
          .line
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            flex: 1
            position: relative
            top: -6px
          .text
            font-size: $fontsize-medium
            font-weight: 700
            padding: 0 12px
      .supports
        margin: 0 auto
        width: 80%
        .support-item
          align-items: center
          display: flex
          margin-bottom: 12px
          padding: 0 12px
          &:last-child
            margin-bottom: 0
          .support-ico
            margin-right: 6px
          .text
            font-size: $fontsize-small
            line-height: 16px
      .bulletin
        margin: 0 auto
        width: 80%
        .content
          font-size: $fontsize-small
          line-height: 24px
          padding: 0 12px
    .detail-close
      clear: both
      font-size: $fontsize-large-xxxx
      height: 30px
      margin: -64px auto 0
      position: relative
      width: 30px
</style>
