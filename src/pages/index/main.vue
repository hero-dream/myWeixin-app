<template>
  <view class="content">
    <Search></Search>
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      indicator-active-color="#ea4350"
      circular="circuar"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item
        class="swiper-item"
        v-for="item in swiperData"
        :key="item.index"
      >
        <image class="image" :src="item.image_src" mode="aspectFill" />
      </swiper-item>
    </swiper>

    <view class="nav">
      <navigator
        class="navData"
        v-for="item in navData"
        :key="item.index"
        hover-class="none"
      >
        <image class="img" :src="item.image_src" mode="aspectFit" />
      </navigator>
    </view>
    <view class="floor_list" v-for="(item, index) in floorList" :key="index">
      <view class="floor_title">
        <image class="imgs" :src="item.floor_title.image_src" mode="" />
      </view>
      <view class="floor_floors">
        <navigator
          class="navigator"
          :url="item2.navigator_src"
          hover-class="none"
          v-for="item2 in item.product_list"
          :key="item2.index"
        >
          <image
            class="navigator_img"
            :src="item2.image_src"
            :mode="index2 === 0 ? 'widthFix' : 'scaleToFill'"
          />
        </navigator>
      </view>
    </view>
  </view>
</template>

<script>
import Search from "../../components/search";
export default {
  components: { Search },
  data() {
    return {
      swiperData: [],
      navData: [],
      floorList: [],
      circular: true,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1500,
    };
  },
  onLoad() {
    uni.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
      success: (res) => {
        console.log(res.data);
        this.swiperData = res.data.message;
        // this.text = 'request success';
      },
    });

    uni.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
      success: (res) => {
        console.log(res.data);
        this.navData = res.data.message;
      },
    });

    uni.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
      success: (res) => {
        console.log(res.data);
        this.floorList = res.data.message;
      },
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.content {
  margin: 90rpx 0 0 0;
  .swiper {
    height: 340rpx;
    .swiper-item {
      .image {
        height: 340rpx;
        width: 100%;
      }
    }
  }
  .nav {
    margin: 12rpx 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .navData {
      width: 128rpx;
      height: 140rpx;

      .img {
        display: flex;
        width: 128rpx;
        height: 140rpx;
      }
    }
  }
  .floor_list {
    margin: 43rpx 0 10rpx 0;
    .floor_title {
      .imgs {
        height: 59rpx;
        width: 100%;
      }
    }
    .floor_floors {
      margin: 0 12rpx;
      overflow: hidden;

      .navigator {
        float: left;

        &:first-child {
          width: 232rpx;
          height: 386rpx;
        }

        &:nth-last-child(-n + 4) {
          width: 232rpx;
          height: 188rpx;
          border-left: 15rpx solid #ffffff;
          border-bottom: 11.5rpx solid #ffffff;
        }
        .navigator_img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>