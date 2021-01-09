<template>
  <view class="content">
    <view class="content_in" 
        @tap="getGoodsTab(index)"
    :class="{active:isActive === index}"
    v-for="(item, index) in tabData"
     :key="item.id">
      {{ item.text }}
    </view>
  </view>
</template>

<script>
export default {
  props: ["tabData"],
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    getGoodsTab(index) {
      this.isActive=index
    },
  },
};
</script>

<style lang="less">
.content {
  display: flex;
  justify-content: space-evenly;
  .content_in {
    width: 184rpx;
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4rpx solid transparent;
    &.active {
      font-weight: 700;
      border-bottom: 4rpx solid red;
    }
  }
}
</style>