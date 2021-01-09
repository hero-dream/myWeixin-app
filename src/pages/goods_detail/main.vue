<template>
  <view class="content">
    <view class="content_swiper">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        indicator-active-color="#2dc2da"
      >
        <swiper-item class="swiper" v-for="(item,index) in pics" :key="item.pics_id">
          <image
            class="item_image"
            :src="item.pics_big_url"
            mode="aspectFill"
            @tap="swiperImg(index)"
          />
        </swiper-item>
      </swiper>
    </view>

   <view class="goods_price">
      {{goods_price}}
    </view>
    <view class="goods_name">
      {{ goods_name}}
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
      const {
        pics,
        goods_price,
        goods_introduce,
        goods_name,
      } = res.data.message;
      this.pics = pics;
   
      this.goods_price = goods_price
      this.goods_introduce = goods_introduce;
      this.goods_name = goods_name;
      console.log(res.data.message);
            console.log(goods_price);
    
    },
      swiperImg(index){
        const urls =this.pics.map(item=>item.pics_big)//映射出图片，将其转成字符串
        console.log(urls);
          uni.previewImage({
  current:index, // 当前显示图片的http链接
  urls // 需要预览的图片http链接列表
})
      }
  },
};
</script>

<style lang="less" scoped>
.content {
  .content_swiper {
    display: flex;
    .swiper,
    .item_image {
      width: 100%;
      height: 750rpx;
    }
  }
  .goods_price{
    width: 50rpx;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    color: red;
    font-weight: 700;
    font-size: 36rpx;
    padding: 0 20rpx;
    &::before{
      content: "￥";
      font-size: 25rpx;
      color: red;
    }
  }
  .goods_name{
    padding: 0 20rpx;
    font-size: 30rpx;
  }
}
</style>