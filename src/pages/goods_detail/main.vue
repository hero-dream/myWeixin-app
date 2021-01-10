<template>
  <view class="content">
    <view class="content_swiper">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        indicator-active-color="#2dc2da"
      >
        <swiper-item
          class="swiper"
          v-for="(item, index) in pics"
          :key="item.pics_id"
        >
          <image
            class="item_image"
            :src="item.pics_big_url"
            mode="aspectFill"
            @tap="swiperImg(index)"
          />
        </swiper-item>
      </swiper>
    </view>
    <view class="prices">
      <view class="goods_price">
        {{ goods_price }}
      </view>

      <view class="iconfont icon-zhuanfa"></view>
      <view class="iconfont icon-shoucang"></view>
    </view>
    <view class="goods_name">
      {{ goods_name }}
    </view>
    <view class="border"></view>
    <view class="goods_introduce">
      <view class="text">图片详情</view>
      <rich-text :nodes="goods_introduce"></rich-text>
    </view>
    <view class="bottom">
      <view class="buttonList">
        <view class="iconfonts">
          <view class="iconfont icon-kefu"
            ><text class="text">联系客服</text></view
          >
          <view class="iconfont icon-gouwuche1"
            ><text class="text">购物车</text></view
          >
        </view>
        <button class="cat">加入购物车</button>
        <button class="buy">立即购买</button>
      </view>
    </view>
  </view>
</template>

<script>
import { getDetail } from "@/api";
export default {
  data() {
    return {
      indicatorDots: true,
      goods_id: "",
      pics: [],
      goods_price: "",
      goods_introduce: "",
      goods_name: "",
    };
  },

  onLoad({ goods_id }) {
    this.goods_id = goods_id;
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const res = await getDetail({ goods_id: this.goods_id });
      let {
        //const为常量，不能重新赋值，let可以
        pics,
        goods_price,
        goods_introduce,
        goods_name,
      } = res.data.message;
      this.pics = pics;
      const { system } = uni.getSystemInfoSync(); //获取版本信息
      console.log(system);
      const isIos = system.toLowerCase().includes("ios"); //toLowerCase将字母转为小写，includes是否包含
      if (isIos) {
        goods_introduce = goods_introduce.replace(/webp/g, "jpg"); //当机型为ios时webp转为jpg，因为ios系统不支持webp模式
      }
      this.goods_price = goods_price;
      // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
      this.goods_introduce = goods_introduce.replace(
        /<img/g,
        '<img class="introduce_img"'
      );
      this.goods_name = goods_name;
      console.log(res.data.message);
    },
    // 图片放大功能
    swiperImg(index) {
      const urls = this.pics.map((item) => item.pics_big); //映射出图片，将其转成字符串
      console.log(urls);
      uni.previewImage({
        current: index, // 当前显示图片的http链接
        urls, // 需要预览的图片http链接列表
      });
    },
  },
};
</script>

<style lang="less">
.content {
  .content_swiper {
    display: flex;
    .swiper,
    .item_image {
      width: 100%;
      height: 750rpx;
    }
  }
  .prices {
    display: flex;
    width: 50rpx;
    height: 100rpx;
    line-height: 100rpx;
    .goods_price {
      color: red;
      font-weight: 700;
      font-size: 36rpx;
      padding: 0 490rpx 0 20rpx;
      &::before {
        content: "￥";
        font-size: 25rpx;
        color: red;
      }
    }

    .icon-shoucang {
      font-size: 50rpx;
      color: #707070;
      padding: 0 20rpx;
    }
    .icon-zhuanfa {
      font-size: 40rpx;
      color: #707070;
      padding: 0 20rpx;
    }
  }
  .goods_name {
    padding: 0 20rpx 20rpx 20rpx;
    font-size: 30rpx;
  }
  .border {
    width: 100%;
    height: 20rpx;
    background-color: #f9f9f9;
  }
  .goods_introduce {
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20rpx 0;
    }
  }
  .introduce_img {
    display: block;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 94rpx;
    background-color: #fff;

    .buttonList {
      display: flex;
      justify-content: space-evenly;
      padding: 20rpx 0;
    }
    .iconfonts {
      display: flex;
      justify-content: space-evenly;
      .icon-kefu,
      .icon-gouwuche1 {
        padding: 0 30rpx;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text {
          font-size: 23rpx;
        }
      }
    }
    .cat {
      width: 196rpx;
      height: 60rpx;
      border-radius: 30rpx;
      background-color: #fcaa23;
      color: #fff;
      font-size: 26rpx;
      text-align: center;
      line-height: 60rpx;
    }

    .buy {
      width: 196rpx;
      height: 60rpx;
      border-radius: 30rpx;
      background-color: red;
      color: #fff;
      font-size: 26rpx;
      text-align: center;
      line-height: 60rpx;
    }
  }
}
</style>