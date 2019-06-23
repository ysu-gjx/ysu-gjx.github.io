<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabel"
      show-slider
      :use-transition="false"
      ref="tabBar"
      :data="tabs"
      class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        ref="slide"
        :options="slideOptions"
        @change="onChange"
        @scroll="onScroll"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>

export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal
        })
      }
    }
  },
  mounted () {
    this.onChange(this.index)
  },
  methods: {
    onChange (current) {
      this.index = current
      const component = this.$refs.component[current]
      component.fetch && component.fetch()
    },
    onScroll (pos) {
      const x = Math.abs(pos.x)
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(deltaX)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'

.tab
  >>> .cube-tab
    padding: 10px 0
  display: flex
  flex-direction: column
  height: 100%
  .slide-wrapper
    flex: 1
    overflow: hidden
</style>
